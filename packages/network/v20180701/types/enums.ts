export const DhGroup = {
    None: "None",
    DHGroup1: "DHGroup1",
    DHGroup2: "DHGroup2",
    DHGroup14: "DHGroup14",
    DHGroup2048: "DHGroup2048",
    ECP256: "ECP256",
    ECP384: "ECP384",
    DHGroup24: "DHGroup24",
} as const;

export type DhGroup = (typeof DhGroup)[keyof typeof DhGroup];

export const IPAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

export type IPAllocationMethod = (typeof IPAllocationMethod)[keyof typeof IPAllocationMethod];

export const IPVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

export const IkeEncryption = {
    DES: "DES",
    DES3: "DES3",
    AES128: "AES128",
    AES192: "AES192",
    AES256: "AES256",
    GCMAES256: "GCMAES256",
    GCMAES128: "GCMAES128",
} as const;

export type IkeEncryption = (typeof IkeEncryption)[keyof typeof IkeEncryption];

export const IkeIntegrity = {
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    SHA384: "SHA384",
    GCMAES256: "GCMAES256",
    GCMAES128: "GCMAES128",
} as const;

export type IkeIntegrity = (typeof IkeIntegrity)[keyof typeof IkeIntegrity];

export const IpsecEncryption = {
    None: "None",
    DES: "DES",
    DES3: "DES3",
    AES128: "AES128",
    AES192: "AES192",
    AES256: "AES256",
    GCMAES128: "GCMAES128",
    GCMAES192: "GCMAES192",
    GCMAES256: "GCMAES256",
} as const;

export type IpsecEncryption = (typeof IpsecEncryption)[keyof typeof IpsecEncryption];

export const IpsecIntegrity = {
    MD5: "MD5",
    SHA1: "SHA1",
    SHA256: "SHA256",
    GCMAES128: "GCMAES128",
    GCMAES192: "GCMAES192",
    GCMAES256: "GCMAES256",
} as const;

export type IpsecIntegrity = (typeof IpsecIntegrity)[keyof typeof IpsecIntegrity];

export const PfsGroup = {
    None: "None",
    PFS1: "PFS1",
    PFS2: "PFS2",
    PFS2048: "PFS2048",
    ECP256: "ECP256",
    ECP384: "ECP384",
    PFS24: "PFS24",
    PFS14: "PFS14",
    PFSMM: "PFSMM",
} as const;

export type PfsGroup = (typeof PfsGroup)[keyof typeof PfsGroup];

export const PublicIPAddressSkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type PublicIPAddressSkuName = (typeof PublicIPAddressSkuName)[keyof typeof PublicIPAddressSkuName];

export const RouteNextHopType = {
    VirtualNetworkGateway: "VirtualNetworkGateway",
    VnetLocal: "VnetLocal",
    Internet: "Internet",
    VirtualAppliance: "VirtualAppliance",
    None: "None",
} as const;

export type RouteNextHopType = (typeof RouteNextHopType)[keyof typeof RouteNextHopType];

export const SecurityRuleAccess = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type SecurityRuleAccess = (typeof SecurityRuleAccess)[keyof typeof SecurityRuleAccess];

export const SecurityRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

export type SecurityRuleDirection = (typeof SecurityRuleDirection)[keyof typeof SecurityRuleDirection];

export const SecurityRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Asterisk: "*",
} as const;

export type SecurityRuleProtocol = (typeof SecurityRuleProtocol)[keyof typeof SecurityRuleProtocol];

export const TransportProtocol = {
    Udp: "Udp",
    Tcp: "Tcp",
    All: "All",
} as const;

export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];