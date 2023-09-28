export const DatasetType = {
    Tabular: "tabular",
    File: "file",
} as const;

/**
 * Specifies dataset type.
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

export const DatastoreTypeArm = {
    Blob: "blob",
    Adls: "adls",
    Adls_gen2: "adls-gen2",
    Dbfs: "dbfs",
    File: "file",
    Mysqldb: "mysqldb",
    Sqldb: "sqldb",
    Psqldb: "psqldb",
} as const;

/**
 * Specifies datastore type.
 */
export type DatastoreTypeArm = (typeof DatastoreTypeArm)[keyof typeof DatastoreTypeArm];

export const Header = {
    All_files_have_same_headers: "all_files_have_same_headers",
    Only_first_file_has_headers: "only_first_file_has_headers",
    No_headers: "no_headers",
    Combine_all_files_headers: "combine_all_files_headers",
} as const;

/**
 * Header type.
 */
export type Header = (typeof Header)[keyof typeof Header];

export const SourceType = {
    Delimited_files: "delimited_files",
    Json_lines_files: "json_lines_files",
    Parquet_files: "parquet_files",
} as const;

/**
 * Data source type.
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
