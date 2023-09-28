export const SkuName = {
    /**
     * The dedicated HSM is a Safenet Luna Network HSM A790 device.
     */
    SafeNet_Luna_Network_HSM_A790: "SafeNet Luna Network HSM A790",
    /**
     * The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 60 calls per second.
     */
    PayShield10K_LMK1_CPS60: "payShield10K_LMK1_CPS60",
    /**
     * The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 250 calls per second.
     */
    PayShield10K_LMK1_CPS250: "payShield10K_LMK1_CPS250",
    /**
     * The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 2500 calls per second.
     */
    PayShield10K_LMK1_CPS2500: "payShield10K_LMK1_CPS2500",
    /**
     * The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 60 calls per second.
     */
    PayShield10K_LMK2_CPS60: "payShield10K_LMK2_CPS60",
    /**
     * The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 250 calls per second.
     */
    PayShield10K_LMK2_CPS250: "payShield10K_LMK2_CPS250",
    /**
     * The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 2500 calls per second.
     */
    PayShield10K_LMK2_CPS2500: "payShield10K_LMK2_CPS2500",
} as const;

/**
 * SKU of the dedicated HSM
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
