import { Contract } from 'ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { bn, mintFromMock } from '../utils';

// --------------- FIXTURES -----------------------

async function typeMultiResourceFixture() {
  const factory = await ethers.getContractFactory('RMRKTypedMultiResourceMock');
  const typedMultiResource = await factory.deploy('Chunky', 'CHNK');
  await typedMultiResource.deployed();

  return { typedMultiResource };
}

async function nestingTypedMultiResourceFixture() {
  const factory = await ethers.getContractFactory('RMRKNestingTypedMultiResourceMock');
  const typedNestingMultiResource = await factory.deploy('Chunky', 'CHNK');
  await typedNestingMultiResource.deployed();

  return { typedNestingMultiResource };
}

async function typedEquippableFixture() {
  const factory = await ethers.getContractFactory('RMRKTypedEquippableMock');
  const typedEquippable = await factory.deploy('Chunky', 'CHNK');
  await typedEquippable.deployed();

  return { typedEquippable };
}

describe('RMRKTypedMultiResourceMock', async function () {
  let owner: SignerWithAddress;
  let typedMultiResource: Contract;
  let tokenId: number;

  const resId = bn(1);
  const resId2 = bn(2);
  const resId3 = bn(3);

  beforeEach(async function () {
    ({ typedMultiResource } = await loadFixture(typeMultiResourceFixture));

    const signers = await ethers.getSigners();
    owner = signers[0];

    tokenId = await mintFromMock(typedMultiResource, owner.address);
  });

  it('can support IERC165', async function () {
    expect(await typedMultiResource.supportsInterface('0x01ffc9a7')).to.equal(true);
  });

  it('can support IMultiResource', async function () {
    expect(await typedMultiResource.supportsInterface('0xc65a6425')).to.equal(true);
  });

  it('can support IRMRKTypedMultiResource', async function () {
    expect(await typedMultiResource.supportsInterface('0xb6a3032e')).to.equal(true);
  });

  it('does not support other interfaces', async function () {
    expect(await typedMultiResource.supportsInterface('0xffffffff')).to.equal(false);
  });

  it('can add typed resources', async function () {
    await typedMultiResource.addTypedResourceEntry(resId, 'ipfs://res1.jpg', 'image/jpeg');
    expect(await typedMultiResource.getResourceType(resId)).to.eql('image/jpeg');
  });

  it('can get top resource by priority and type', async function () {
    await typedMultiResource.addTypedResourceEntry(resId, 'ipfs://res1.jpg', 'image/jpeg');
    await typedMultiResource.addTypedResourceEntry(resId2, 'ipfs://res2.pdf', 'application/pdf');
    await typedMultiResource.addTypedResourceEntry(resId3, 'ipfs://res3.jpg', 'image/jpeg');
    await typedMultiResource.addResourceToToken(tokenId, resId, 0);
    await typedMultiResource.acceptResource(tokenId, 0);
    await typedMultiResource.addResourceToToken(tokenId, resId2, 0);
    await typedMultiResource.acceptResource(tokenId, 0);
    await typedMultiResource.addResourceToToken(tokenId, resId3, 0);
    await typedMultiResource.acceptResource(tokenId, 0);
    await typedMultiResource.setPriority(tokenId, [1, 0, 2]); // Pdf has higher priority but it's the wanted type

    expect(
      await typedMultiResource.getTopResourceMetaForTokenWithType(tokenId, 'image/jpeg'),
    ).to.eql('ipfs://res1.jpg');
  });

  it('cannot get top resource for if token has no resources with this type', async function () {
    await typedMultiResource.addTypedResourceEntry(resId, 'ipfs://res1.jpg', 'image/jpeg');
    await typedMultiResource.addResourceToToken(tokenId, resId, 0);
    await typedMultiResource.acceptResource(tokenId, 0);

    await expect(
      typedMultiResource.getTopResourceMetaForTokenWithType(tokenId, 'application/pdf'),
    ).to.be.revertedWithCustomError(typedMultiResource, 'RMRKTokenHasNoResourcesWithType');
  });
});

describe('RMRKNestingTypedMultiResourceMock', async function () {
  let typedNestingMultiResource: Contract;

  beforeEach(async function () {
    ({ typedNestingMultiResource } = await loadFixture(nestingTypedMultiResourceFixture));
  });

  it('can support IERC165', async function () {
    expect(await typedNestingMultiResource.supportsInterface('0x01ffc9a7')).to.equal(true);
  });

  it('can support IMultiResource', async function () {
    expect(await typedNestingMultiResource.supportsInterface('0xc65a6425')).to.equal(true);
  });

  it('can support IRMRKTypedMultiResource', async function () {
    expect(await typedNestingMultiResource.supportsInterface('0xb6a3032e')).to.equal(true);
  });

  it('does not support other interfaces', async function () {
    expect(await typedNestingMultiResource.supportsInterface('0xffffffff')).to.equal(false);
  });

  it('can add typed resources', async function () {
    const resId = bn(1);
    await typedNestingMultiResource.addTypedResourceEntry(resId, 'ipfs://res1.jpg', 'image/jpeg');
    expect(await typedNestingMultiResource.getResourceType(resId)).to.eql('image/jpeg');
  });
});

describe('RMRKTypedEquippableMock', async function () {
  let typedEquippable: Contract;

  beforeEach(async function () {
    ({ typedEquippable } = await loadFixture(typedEquippableFixture));
  });

  it('can support IERC165', async function () {
    expect(await typedEquippable.supportsInterface('0x01ffc9a7')).to.equal(true);
  });

  it('can support IMultiResource', async function () {
    expect(await typedEquippable.supportsInterface('0xc65a6425')).to.equal(true);
  });

  it('can support IRMRKTypedMultiResource', async function () {
    expect(await typedEquippable.supportsInterface('0xb6a3032e')).to.equal(true);
  });

  it('does not support other interfaces', async function () {
    expect(await typedEquippable.supportsInterface('0xffffffff')).to.equal(false);
  });

  it('can add typed resources', async function () {
    const resId = bn(1);
    await typedEquippable.addTypedResourceEntry(
      {
        id: resId,
        equippableRefId: 0,
        metadataURI: 'fallback.json',
        baseAddress: ethers.constants.AddressZero,
      },
      [],
      [],
      'image/jpeg',
    );
    expect(await typedEquippable.getResourceType(resId)).to.eql('image/jpeg');
  });
});
