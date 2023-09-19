export const StorageSkuName = {
    Standard_LRS: "Standard_LRS",
    Standard_GRS: "Standard_GRS",
    Standard_Ragrs: "Standard_Ragrs",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
    Premium_ZRS: "Premium_ZRS",
    Standard_Gzrs: "Standard_Gzrs",
    Standard_Ragzrs: "Standard_Ragzrs",
} as const;

export type StorageSkuName = (typeof StorageSkuName)[keyof typeof StorageSkuName];
