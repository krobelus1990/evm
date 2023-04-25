# RMRKTokenPropertiesRepository

*RMRK team*

> RMRKTokenPropertiesRepository

Smart contract of the RMRK Token property repository module.



## Methods

### getAddressTokenProperty

```solidity
function getAddressTokenProperty(address collection, uint256 tokenId, string key) external view returns (address)
```

Used to retrieve the address type token properties.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the property |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The value of the address property |

### getBoolTokenProperty

```solidity
function getBoolTokenProperty(address collection, uint256 tokenId, string key) external view returns (bool)
```

Used to retrieve the bool type token properties.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the property |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | The value of the bool property |

### getBytesTokenProperty

```solidity
function getBytesTokenProperty(address collection, uint256 tokenId, string key) external view returns (bytes)
```

Used to retrieve the bytes type token properties.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the property |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | The value of the bytes property |

### getStringTokenProperty

```solidity
function getStringTokenProperty(address collection, uint256 tokenId, string key) external view returns (string)
```

Used to retrieve the string type token properties.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the property |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | The value of the string property |

### getUintTokenProperty

```solidity
function getUintTokenProperty(address collection, uint256 tokenId, string key) external view returns (uint256)
```

Used to retrieve the uint type token properties.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the property |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The value of the uint property |

### isCollaborator

```solidity
function isCollaborator(address collaborator, address collection) external view returns (bool)
```

Used to check if the specified address is listed as a collaborator of the given collection&#39;s parameter.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collaborator | address | Address to be checked. |
| collection | address | Address of the collection. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | Boolean value indicating if the address is a collaborator of the given collection&#39;s (`true`) or not  (`false`). |

### isSpecificAddress

```solidity
function isSpecificAddress(address specificAddress, address collection, string key) external view returns (bool)
```

Used to check if the specified address is listed as a specific address of the given collection&#39;s  parameter.



#### Parameters

| Name | Type | Description |
|---|---|---|
| specificAddress | address | Address to be checked. |
| collection | address | Address of the collection. |
| key | string | The key of the property |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | Boolean value indicating if the address is a specific address of the given collection&#39;s parameter  (`true`) or not (`false`). |

### manageAccessControl

```solidity
function manageAccessControl(address collection, string key, enum IRMRKTokenPropertiesRepository.AccessType accessType, address specificAddress) external nonpayable
```

Used to manage the access control settings for a specific parameter.

*Only the `issuer` of the collection can call this function.The possible `accessType` values are:  [      Issuer,      Collaborator,      IssuerOrCollaborator,      TokenOwner,      SpecificAddress,  ]Emits an {AccessControlUpdated} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection being managed. |
| key | string | The key of the property |
| accessType | enum IRMRKTokenPropertiesRepository.AccessType | The type of access control to be applied to the parameter. |
| specificAddress | address | The address to be added as a specific addresses allowed to manage the given  parameter. |

### manageCollaborators

```solidity
function manageCollaborators(address collection, address[] collaboratorAddresses, bool[] collaboratorAddressAccess) external nonpayable
```

Used to manage the collaborators of a collection.

*The `collaboratorAddresses` and `collaboratorAddressAccess` arrays must be of the same length.Emits a {CollaboratorUpdate} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection |
| collaboratorAddresses | address[] | The array of collaborator addresses being managed |
| collaboratorAddressAccess | bool[] | The array of boolean values indicating if the collaborator address should  receive the permission (`true`) or not (`false`). |

### registerAccessControl

```solidity
function registerAccessControl(address collection, address issuer, bool useOwnable) external nonpayable
```

Used to register a collection to use the RMRK token properties repository.

*If the collection does not implement the Ownable interface, the `useOwnable` value must be set to `false`.Emits an {AccessControlRegistration} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection that will use the RMRK token properties repository. |
| issuer | address | The address of the issuer of the collection. |
| useOwnable | bool | The boolean value to indicate if the collection implements the Ownable interface and whether it  should be used to validate that the caller is the issuer (`true`) or to use the manually set issuer address  (`false`). |

### setAddressProperty

```solidity
function setAddressProperty(address collection, uint256 tokenId, string key, address value) external nonpayable
```

Used to set an address property.

*Emits a {AddressPropertyUpdated} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the property |
| tokenId | uint256 | The token ID |
| key | string | The property key |
| value | address | The property value |

### setBoolProperty

```solidity
function setBoolProperty(address collection, uint256 tokenId, string key, bool value) external nonpayable
```

Used to set a boolean property.

*Emits a {BoolPropertyUpdated} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the property |
| tokenId | uint256 | The token ID |
| key | string | The property key |
| value | bool | The property value |

### setBytesProperty

```solidity
function setBytesProperty(address collection, uint256 tokenId, string key, bytes value) external nonpayable
```

Used to set an bytes property.

*Emits a {BytesPropertyUpdated} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the property |
| tokenId | uint256 | The token ID |
| key | string | The property key |
| value | bytes | The property value |

### setStringProperty

```solidity
function setStringProperty(address collection, uint256 tokenId, string key, string value) external nonpayable
```

Used to set a string property.

*Emits a {StringPropertyUpdated} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the property |
| tokenId | uint256 | The token ID |
| key | string | The property key |
| value | string | The property value |

### setUintProperty

```solidity
function setUintProperty(address collection, uint256 tokenId, string key, uint256 value) external nonpayable
```

Used to set a number property.

*Emits a {UintPropertyUpdated} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the property |
| tokenId | uint256 | The token ID |
| key | string | The property key |
| value | uint256 | The property value |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### AccessControlRegistration

```solidity
event AccessControlRegistration(address indexed collection, address indexed issuer, address indexed registeringAddress, bool useOwnable)
```

Used to notify listeners that a new collection has been registered to use the repository.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | Address of the collection |
| issuer `indexed` | address | Address of the issuer of the collection; the addess authorized to manage the access control |
| registeringAddress `indexed` | address | Address that registered the collection |
| useOwnable  | bool | A boolean value indicating whether the collection uses the Ownable extension to verify the  issuer (`true`) or not (`false`) |

### AccessControlUpdate

```solidity
event AccessControlUpdate(address indexed collection, string key, enum IRMRKTokenPropertiesRepository.AccessType accessType, address specificAddress)
```

Used to notify listeners that the access control settings for a specific parameter have been updated.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | Address of the collection |
| key  | string | The name of the parameter for which the access control settings have been updated |
| accessType  | enum IRMRKTokenPropertiesRepository.AccessType | The AccessType of the parameter for which the access control settings have been updated |
| specificAddress  | address | The specific addresses that has been updated |

### AddressPropertyUpdated

```solidity
event AddressPropertyUpdated(address indexed collection, uint256 indexed tokenId, string key, address value)
```

Used to notify listeners that an address property has been updated.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the property |
| value  | address | The new value of the property |

### BoolPropertyUpdated

```solidity
event BoolPropertyUpdated(address indexed collection, uint256 indexed tokenId, string key, bool value)
```

Used to notify listeners that a boolean property has been updated.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the property |
| value  | bool | The new value of the property |

### BytesPropertyUpdated

```solidity
event BytesPropertyUpdated(address indexed collection, uint256 indexed tokenId, string key, bytes value)
```

Used to notify listeners that a bytes property has been updated.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the property |
| value  | bytes | The new value of the property |

### CollaboratorUpdate

```solidity
event CollaboratorUpdate(address indexed collection, address indexed collaborator, bool isCollaborator)
```

Used to notify listeners that a new collaborator has been added or removed.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | Address of the collection |
| collaborator `indexed` | address | Address of the collaborator |
| isCollaborator  | bool | A boolean value indicating whether the collaborator has been added (`true`) or removed  (`false`) |

### StringPropertyUpdated

```solidity
event StringPropertyUpdated(address indexed collection, uint256 indexed tokenId, string key, string value)
```

Used to notify listeners that a string property has been updated.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the property |
| value  | string | The new value of the property |

### UintPropertyUpdated

```solidity
event UintPropertyUpdated(address indexed collection, uint256 indexed tokenId, string key, uint256 value)
```

Used to notify listeners that an uint property has been updated.



#### Parameters

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the property |
| value  | uint256 | The new value of the property |



## Errors

### RMRKCollaboratorArraysNotEqualLength

```solidity
error RMRKCollaboratorArraysNotEqualLength()
```

Attempting to pass collaborator address array and collaborator permission array of different lengths




### RMRKCollectionAlreadyRegistered

```solidity
error RMRKCollectionAlreadyRegistered()
```

Attempting to register a collection that is already registered




### RMRKCollectionNotRegistered

```solidity
error RMRKCollectionNotRegistered()
```

Attempting to manage or interact with colleciton that is not registered




### RMRKNotCollectionCollaborator

```solidity
error RMRKNotCollectionCollaborator()
```

Attempting to manage a collection without being the collection&#39;s collaborator




### RMRKNotCollectionIssuer

```solidity
error RMRKNotCollectionIssuer()
```

Attemting to manage a collection without being the collection&#39;s issuer




### RMRKNotCollectionIssuerOrCollaborator

```solidity
error RMRKNotCollectionIssuerOrCollaborator()
```

Attempting to manage a collection without being the collection&#39;s issuer or collaborator




### RMRKNotSpecificAddress

```solidity
error RMRKNotSpecificAddress()
```

Attempting to manage a collection without being the specific address




### RMRKNotTokenOwner

```solidity
error RMRKNotTokenOwner()
```

Attempting to manage a token without being its owner




### RMRKOwnableNotImplemented

```solidity
error RMRKOwnableNotImplemented()
```

Attemtping to use `Ownable` interface without implementing it




