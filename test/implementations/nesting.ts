import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import {
  transfer,
  nestTransfer,
  singleFixtureWithArgs,
  parentChildFixtureWithArgs,
  mintFromImpl,
  nestMintFromImpl,
  ONE_ETH,
} from '../utils';
import shouldBehaveLikeNesting from '../behavior/nesting';
import shouldControlValidMinting from '../behavior/mintingImpl';
// import shouldBehaveLikeERC721 from '../behavior/erc721';

async function singleFixture(): Promise<Contract> {
  return singleFixtureWithArgs('RMRKNestingImpl', [
    'RMRK Test',
    'RMRKTST',
    10000,
    ONE_ETH,
    'ipfs://tokenURI',
  ]);
}

async function parentChildFixture(): Promise<{ parent: Contract; child: Contract }> {
  return parentChildFixtureWithArgs(
    'RMRKNestingImpl',
    ['Chunky', 'CHNK', 10000, ONE_ETH, 'ipfs://tokenURI'],
    ['Monkey', 'MONK', 10000, ONE_ETH, 'ipfs://tokenURI'],
  );
}

describe('NestingMultiResourceImpl Nesting Behavior', function () {
  beforeEach(async function () {
    const { parent, child } = await loadFixture(parentChildFixture);
    this.parentToken = parent;
    this.childToken = child;
  });

  shouldBehaveLikeNesting(mintFromImpl, nestMintFromImpl, transfer, nestTransfer);
});

// FIXME: This test don't fully pass due to difference in minting
describe('NestingImpl ERC721 behavior', function () {
  let token: Contract;

  beforeEach(async function () {
    token = await loadFixture(singleFixture);
    this.token = token;
    this.ERC721Receiver = await ethers.getContractFactory('ERC721ReceiverMock');
  });

  // shouldBehaveLikeERC721(name, symbol);
});

describe('NestingImpl Other', async function () {
  beforeEach(async function () {
    this.token = await loadFixture(singleFixture);
  });

  shouldControlValidMinting();

  it('can get tokenURI', async function () {
    const owner = (await ethers.getSigners())[0];
    const tokenId = await mintFromImpl(this.token, owner.address);
    expect(await this.token.tokenURI(tokenId)).to.eql('ipfs://tokenURI');
  });
});
