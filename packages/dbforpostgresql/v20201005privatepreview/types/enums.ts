export const CitusVersion = {
    CitusVersion_8_3: "8.3",
    CitusVersion_9_0: "9.0",
    CitusVersion_9_1: "9.1",
    CitusVersion_9_2: "9.2",
    CitusVersion_9_3: "9.3",
    CitusVersion_9_4: "9.4",
    CitusVersion_9_5: "9.5",
} as const;

export type CitusVersion = (typeof CitusVersion)[keyof typeof CitusVersion];

export const CreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
    ReadReplica: "ReadReplica",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const PostgreSQLVersion = {
    PostgreSQLVersion_11: "11",
    PostgreSQLVersion_12: "12",
} as const;

export type PostgreSQLVersion = (typeof PostgreSQLVersion)[keyof typeof PostgreSQLVersion];

export const ServerEdition = {
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

export type ServerEdition = (typeof ServerEdition)[keyof typeof ServerEdition];

export const ServerRole = {
    Coordinator: "Coordinator",
    Worker: "Worker",
} as const;

export type ServerRole = (typeof ServerRole)[keyof typeof ServerRole];
