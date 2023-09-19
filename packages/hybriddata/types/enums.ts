export const RunLocation = {
    None: "none",
    Australiaeast: "australiaeast",
    Australiasoutheast: "australiasoutheast",
    Brazilsouth: "brazilsouth",
    Canadacentral: "canadacentral",
    Canadaeast: "canadaeast",
    Centralindia: "centralindia",
    Centralus: "centralus",
    Eastasia: "eastasia",
    Eastus: "eastus",
    Eastus2: "eastus2",
    Japaneast: "japaneast",
    Japanwest: "japanwest",
    Koreacentral: "koreacentral",
    Koreasouth: "koreasouth",
    Southeastasia: "southeastasia",
    Southcentralus: "southcentralus",
    Southindia: "southindia",
    Northcentralus: "northcentralus",
    Northeurope: "northeurope",
    Uksouth: "uksouth",
    Ukwest: "ukwest",
    Westcentralus: "westcentralus",
    Westeurope: "westeurope",
    Westindia: "westindia",
    Westus: "westus",
    Westus2: "westus2",
} as const;

export type RunLocation = (typeof RunLocation)[keyof typeof RunLocation];

export const State = {
    Disabled: "Disabled",
    Enabled: "Enabled",
    Supported: "Supported",
} as const;

export type State = (typeof State)[keyof typeof State];

export const SupportedAlgorithm = {
    None: "None",
    RSA1_5: "RSA1_5",
    RSA_OAEP: "RSA_OAEP",
    PlainText: "PlainText",
} as const;

export type SupportedAlgorithm = (typeof SupportedAlgorithm)[keyof typeof SupportedAlgorithm];

export const UserConfirmation = {
    NotRequired: "NotRequired",
    Required: "Required",
} as const;

export type UserConfirmation = (typeof UserConfirmation)[keyof typeof UserConfirmation];
