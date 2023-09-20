export const BudgetOperatorType = {
    In: "In",
} as const;

export type BudgetOperatorType = (typeof BudgetOperatorType)[keyof typeof BudgetOperatorType];

export const CategoryType = {
    Cost: "Cost",
} as const;

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export const CultureCode = {
    En_us: "en-us",
    Ja_jp: "ja-jp",
    Zh_cn: "zh-cn",
    De_de: "de-de",
    Es_es: "es-es",
    Fr_fr: "fr-fr",
    It_it: "it-it",
    Ko_kr: "ko-kr",
    Pt_br: "pt-br",
    Ru_ru: "ru-ru",
    Zh_tw: "zh-tw",
    Cs_cz: "cs-cz",
    Pl_pl: "pl-pl",
    Tr_tr: "tr-tr",
    Da_dk: "da-dk",
    En_gb: "en-gb",
    Hu_hu: "hu-hu",
    Nb_no: "nb-no",
    Nl_nl: "nl-nl",
    Pt_pt: "pt-pt",
    Sv_se: "sv-se",
} as const;

export type CultureCode = (typeof CultureCode)[keyof typeof CultureCode];

export const OperatorType = {
    /**
     * Alert will be triggered if the evaluated cost is the same as threshold value. Note: It’s not recommended to use this OperatorType as there’s low chance of cost being exactly the same as threshold value, leading to missing of your alert. This OperatorType will be deprecated in future. 
     */
    EqualTo: "EqualTo",
    /**
     * Alert will be triggered if the evaluated cost is greater than the threshold value. Note: This is the recommended OperatorType while configuring Budget Alert.
     */
    GreaterThan: "GreaterThan",
    /**
     * Alert will be triggered if the evaluated cost is greater than or equal to the threshold value.
     */
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
} as const;

export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const ThresholdType = {
    /**
     * Actual costs budget alerts notify when the actual accrued cost exceeds the allocated budget .
     */
    Actual: "Actual",
    /**
     * Forecasted costs budget alerts provide advanced notification that your spending trends are likely to exceed your allocated budget, as it relies on forecasted cost predictions.
     */
    Forecasted: "Forecasted",
} as const;

export type ThresholdType = (typeof ThresholdType)[keyof typeof ThresholdType];

export const TimeGrainType = {
    Monthly: "Monthly",
    Quarterly: "Quarterly",
    Annually: "Annually",
    BillingMonth: "BillingMonth",
    BillingQuarter: "BillingQuarter",
    BillingAnnual: "BillingAnnual",
} as const;

export type TimeGrainType = (typeof TimeGrainType)[keyof typeof TimeGrainType];