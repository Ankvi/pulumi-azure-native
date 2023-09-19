export const EventGridDataFormat = {
    MULTIJSON: "MULTIJSON",
    JSON: "JSON",
    CSV: "CSV",
    TSV: "TSV",
    SCSV: "SCSV",
    SOHSV: "SOHSV",
    PSV: "PSV",
    TXT: "TXT",
    RAW: "RAW",
    SINGLEJSON: "SINGLEJSON",
    AVRO: "AVRO",
    TSVE: "TSVE",
    PARQUET: "PARQUET",
    ORC: "ORC",
} as const;

export type EventGridDataFormat = (typeof EventGridDataFormat)[keyof typeof EventGridDataFormat];

export const Kind = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    IotHub: "IotHub",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];
