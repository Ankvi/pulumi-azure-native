export const DnsType = {
    AzureDns: "AzureDns",
    DefaultDomainRegistrarDns: "DefaultDomainRegistrarDns",
} as const;

/**
 * Target DNS type (would be used for migration)
 */
export type DnsType = (typeof DnsType)[keyof typeof DnsType];
