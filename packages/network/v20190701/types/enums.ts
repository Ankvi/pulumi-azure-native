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

export const VpnGatewayTunnelingProtocol = {
    IkeV2: "IkeV2",
    OpenVPN: "OpenVPN",
} as const;

export type VpnGatewayTunnelingProtocol = (typeof VpnGatewayTunnelingProtocol)[keyof typeof VpnGatewayTunnelingProtocol];

export const WebApplicationFirewallAction = {
    Allow: "Allow",
    Block: "Block",
    Log: "Log",
} as const;

export type WebApplicationFirewallAction = (typeof WebApplicationFirewallAction)[keyof typeof WebApplicationFirewallAction];

export const WebApplicationFirewallEnabledState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type WebApplicationFirewallEnabledState = (typeof WebApplicationFirewallEnabledState)[keyof typeof WebApplicationFirewallEnabledState];

export const WebApplicationFirewallMatchVariable = {
    RemoteAddr: "RemoteAddr",
    RequestMethod: "RequestMethod",
    QueryString: "QueryString",
    PostArgs: "PostArgs",
    RequestUri: "RequestUri",
    RequestHeaders: "RequestHeaders",
    RequestBody: "RequestBody",
    RequestCookies: "RequestCookies",
} as const;

export type WebApplicationFirewallMatchVariable = (typeof WebApplicationFirewallMatchVariable)[keyof typeof WebApplicationFirewallMatchVariable];

export const WebApplicationFirewallMode = {
    Prevention: "Prevention",
    Detection: "Detection",
} as const;

export type WebApplicationFirewallMode = (typeof WebApplicationFirewallMode)[keyof typeof WebApplicationFirewallMode];

export const WebApplicationFirewallOperator = {
    IPMatch: "IPMatch",
    Equal: "Equal",
    Contains: "Contains",
    LessThan: "LessThan",
    GreaterThan: "GreaterThan",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    BeginsWith: "BeginsWith",
    EndsWith: "EndsWith",
    Regex: "Regex",
} as const;

export type WebApplicationFirewallOperator = (typeof WebApplicationFirewallOperator)[keyof typeof WebApplicationFirewallOperator];

export const WebApplicationFirewallRuleType = {
    MatchRule: "MatchRule",
    Invalid: "Invalid",
} as const;

export type WebApplicationFirewallRuleType = (typeof WebApplicationFirewallRuleType)[keyof typeof WebApplicationFirewallRuleType];

export const WebApplicationFirewallTransform = {
    Lowercase: "Lowercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
    HtmlEntityDecode: "HtmlEntityDecode",
} as const;

export type WebApplicationFirewallTransform = (typeof WebApplicationFirewallTransform)[keyof typeof WebApplicationFirewallTransform];
