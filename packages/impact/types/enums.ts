export const ConfidenceLevel = {
    /**
     * Low confidence on azure being the source of impact
     */
    Low: "Low",
    /**
     * Medium confidence on azure being the source of impact
     */
    Medium: "Medium",
    /**
     * High confidence on azure being the source of impact
     */
    High: "High",
} as const;

/**
 * Degree of confidence on the impact being a platform issue
 */
export type ConfidenceLevel = (typeof ConfidenceLevel)[keyof typeof ConfidenceLevel];

export const IncidentSource = {
    /**
     * When source of Incident is AzureDevops
     */
    AzureDevops: "AzureDevops",
    /**
     * When source of Incident is Microsoft ICM
     */
    ICM: "ICM",
    /**
     * When source of Incident is Jira
     */
    Jira: "Jira",
    /**
     * When source of Incident is ServiceNow
     */
    ServiceNow: "ServiceNow",
    /**
     * When source of Incident is Other
     */
    Other: "Other",
} as const;

/**
 * Client incident source. ex : source system name where the incident is created
 */
export type IncidentSource = (typeof IncidentSource)[keyof typeof IncidentSource];

export const MetricUnit = {
    /**
     * When measurement is in ByteSeconds
     */
    ByteSeconds: "ByteSeconds",
    /**
     * When measurement is in Bytes
     */
    Bytes: "Bytes",
    /**
     * When measurement is in BytesPerSecond
     */
    BytesPerSecond: "BytesPerSecond",
    /**
     * When measurement is in Cores
     */
    Cores: "Cores",
    /**
     * When measurement is in Count
     */
    Count: "Count",
    /**
     * When measurement is in CountPerSecond
     */
    CountPerSecond: "CountPerSecond",
    /**
     * When measurement is in MilliCores
     */
    MilliCores: "MilliCores",
    /**
     * When measurement is in MilliSeconds
     */
    MilliSeconds: "MilliSeconds",
    /**
     * When measurement is in NanoCores
     */
    NanoCores: "NanoCores",
    /**
     * When measurement is in Percent
     */
    Percent: "Percent",
    /**
     * When measurement is in Seconds
     */
    Seconds: "Seconds",
    /**
     * When measurement is in Other than listed
     */
    Other: "Other",
} as const;

/**
 * Unit of the metric ex: Bytes, Percentage, Count, Seconds, Milliseconds, Bytes/Second, Count/Second, etc.., Other
 */
export type MetricUnit = (typeof MetricUnit)[keyof typeof MetricUnit];

export const Platform = {
    /**
     * Type of Azure Monitor
     */
    AzureMonitor: "AzureMonitor",
} as const;

/**
 * connector type
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

export const Protocol = {
    /**
     * When communication protocol is TCP
     */
    TCP: "TCP",
    /**
     * When communication protocol is UDP
     */
    UDP: "UDP",
    /**
     * When communication protocol is HTTP
     */
    HTTP: "HTTP",
    /**
     * When communication protocol is HTTPS
     */
    HTTPS: "HTTPS",
    /**
     * When communication protocol is RDP
     */
    RDP: "RDP",
    /**
     * When communication protocol is FTP
     */
    FTP: "FTP",
    /**
     * When communication protocol is SSH
     */
    SSH: "SSH",
    /**
     * When communication protocol is Other
     */
    Other: "Other",
} as const;

/**
 * Protocol used for the connection
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const Toolset = {
    /**
     * If communication toolset is Terraform
     */
    Terraform: "Terraform",
    /**
     * If communication toolset is Puppet
     */
    Puppet: "Puppet",
    /**
     * If communication toolset is Chef
     */
    Chef: "Chef",
    /**
     * If communication toolset is SDK
     */
    SDK: "SDK",
    /**
     * If communication toolset is Ansible
     */
    Ansible: "Ansible",
    /**
     * If communication toolset is ARM
     */
    ARM: "ARM",
    /**
     * If communication toolset is Portal
     */
    Portal: "Portal",
    /**
     * If communication toolset is Shell
     */
    Shell: "Shell",
    /**
     * If communication toolset is Other
     */
    Other: "Other",
} as const;

/**
 * Tool used to interact with Azure. SDK, AzPortal, etc.., Other
 */
export type Toolset = (typeof Toolset)[keyof typeof Toolset];