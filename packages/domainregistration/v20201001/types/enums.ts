export const DnsType = {
    AzureDns: "AzureDns",
    DefaultDomainRegistrarDns: "DefaultDomainRegistrarDns",
} as const;

export type DnsType = (typeof DnsType)[keyof typeof DnsType];
