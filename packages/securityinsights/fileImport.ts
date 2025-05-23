import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a file import in Azure Security Insights.
 *
 * Uses Azure REST API version 2025-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FileImport extends pulumi.CustomResource {
    /**
     * Get an existing FileImport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FileImport {
        return new FileImport(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:FileImport';

    /**
     * Returns true if the given object is an instance of FileImport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileImport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileImport.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The content type of this file.
     */
    public readonly contentType!: pulumi.Output<string>;
    /**
     * The time the file was imported.
     */
    public /*out*/ readonly createdTimeUTC!: pulumi.Output<string>;
    /**
     * Represents the error file (if the import was ingested with errors or failed the validation).
     */
    public /*out*/ readonly errorFile!: pulumi.Output<types.outputs.FileMetadataResponse>;
    /**
     * An ordered list of some of the errors that were encountered during validation.
     */
    public /*out*/ readonly errorsPreview!: pulumi.Output<types.outputs.ValidationErrorResponse[]>;
    /**
     * The time the files associated with this import are deleted from the storage account.
     */
    public /*out*/ readonly filesValidUntilTimeUTC!: pulumi.Output<string>;
    /**
     * Represents the imported file.
     */
    public readonly importFile!: pulumi.Output<types.outputs.FileMetadataResponse>;
    /**
     * The time the file import record is soft deleted from the database and history.
     */
    public /*out*/ readonly importValidUntilTimeUTC!: pulumi.Output<string>;
    /**
     * The number of records that have been successfully ingested.
     */
    public /*out*/ readonly ingestedRecordCount!: pulumi.Output<number>;
    /**
     * Describes how to ingest the records in the file.
     */
    public readonly ingestionMode!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The source for the data in the file.
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * The state of the file import.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The number of records in the file.
     */
    public /*out*/ readonly totalRecordCount!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The number of records that have passed validation.
     */
    public /*out*/ readonly validRecordCount!: pulumi.Output<number>;

    /**
     * Create a FileImport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileImportArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentType'");
            }
            if ((!args || args.importFile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'importFile'");
            }
            if ((!args || args.ingestionMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ingestionMode'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["fileImportId"] = args ? args.fileImportId : undefined;
            resourceInputs["importFile"] = args ? args.importFile : undefined;
            resourceInputs["ingestionMode"] = args ? args.ingestionMode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTimeUTC"] = undefined /*out*/;
            resourceInputs["errorFile"] = undefined /*out*/;
            resourceInputs["errorsPreview"] = undefined /*out*/;
            resourceInputs["filesValidUntilTimeUTC"] = undefined /*out*/;
            resourceInputs["importValidUntilTimeUTC"] = undefined /*out*/;
            resourceInputs["ingestedRecordCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalRecordCount"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validRecordCount"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contentType"] = undefined /*out*/;
            resourceInputs["createdTimeUTC"] = undefined /*out*/;
            resourceInputs["errorFile"] = undefined /*out*/;
            resourceInputs["errorsPreview"] = undefined /*out*/;
            resourceInputs["filesValidUntilTimeUTC"] = undefined /*out*/;
            resourceInputs["importFile"] = undefined /*out*/;
            resourceInputs["importValidUntilTimeUTC"] = undefined /*out*/;
            resourceInputs["ingestedRecordCount"] = undefined /*out*/;
            resourceInputs["ingestionMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalRecordCount"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validRecordCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20220801preview:FileImport" }, { type: "azure-native:securityinsights/v20220901preview:FileImport" }, { type: "azure-native:securityinsights/v20221001preview:FileImport" }, { type: "azure-native:securityinsights/v20221101preview:FileImport" }, { type: "azure-native:securityinsights/v20221201preview:FileImport" }, { type: "azure-native:securityinsights/v20230201preview:FileImport" }, { type: "azure-native:securityinsights/v20230301preview:FileImport" }, { type: "azure-native:securityinsights/v20230401preview:FileImport" }, { type: "azure-native:securityinsights/v20230501preview:FileImport" }, { type: "azure-native:securityinsights/v20230601preview:FileImport" }, { type: "azure-native:securityinsights/v20230701preview:FileImport" }, { type: "azure-native:securityinsights/v20230801preview:FileImport" }, { type: "azure-native:securityinsights/v20230901preview:FileImport" }, { type: "azure-native:securityinsights/v20231001preview:FileImport" }, { type: "azure-native:securityinsights/v20231201preview:FileImport" }, { type: "azure-native:securityinsights/v20240101preview:FileImport" }, { type: "azure-native:securityinsights/v20240401preview:FileImport" }, { type: "azure-native:securityinsights/v20241001preview:FileImport" }, { type: "azure-native:securityinsights/v20250101preview:FileImport" }, { type: "azure-native:securityinsights/v20250401preview:FileImport" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FileImport.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FileImport resource.
 */
export interface FileImportArgs {
    /**
     * The content type of this file.
     */
    contentType: pulumi.Input<string | types.enums.FileImportContentType>;
    /**
     * File import ID
     */
    fileImportId?: pulumi.Input<string>;
    /**
     * Represents the imported file.
     */
    importFile: pulumi.Input<types.inputs.FileMetadataArgs>;
    /**
     * Describes how to ingest the records in the file.
     */
    ingestionMode: pulumi.Input<string | types.enums.IngestionMode>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The source for the data in the file.
     */
    source: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}