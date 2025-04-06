import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An import job instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ImportJob extends pulumi.CustomResource {
    /**
     * Get an existing ImportJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ImportJob {
        return new ImportJob(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagecache:ImportJob';

    /**
     * Returns true if the given object is an instance of ImportJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportJob.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A recent and frequently updated rate of total files, directories, and symlinks imported per second.
     */
    public /*out*/ readonly blobsImportedPerSecond!: pulumi.Output<number>;
    /**
     * A recent and frequently updated rate of blobs walked per second.
     */
    public /*out*/ readonly blobsWalkedPerSecond!: pulumi.Output<number>;
    /**
     * How the import job will handle conflicts. For example, if the import job is trying to bring in a directory, but a file is at that path, how it handles it. Fail indicates that the import job should stop immediately and not do anything with the conflict. Skip indicates that it should pass over the conflict. OverwriteIfDirty causes the import job to delete and re-import the file or directory if it is a conflicting type, is dirty, or was not previously imported. OverwriteAlways extends OverwriteIfDirty to include releasing files that had been restored but were not dirty. Please reference https://learn.microsoft.com/en-us/azure/azure-managed-lustre/ for a thorough explanation of these resolution modes.
     */
    public readonly conflictResolutionMode!: pulumi.Output<string | undefined>;
    /**
     * An array of blob paths/prefixes that get imported into the cluster namespace. It has '/' as the default value.
     */
    public readonly importPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * The time of the last completed archive operation
     */
    public /*out*/ readonly lastCompletionTime!: pulumi.Output<string>;
    /**
     * The time the latest archive operation started
     */
    public /*out*/ readonly lastStartedTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Total non-conflict oriented errors the import job will tolerate before exiting with failure. -1 means infinite. 0 means exit immediately and is the default.
     */
    public readonly maximumErrors!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ARM provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The state of the import job. InProgress indicates the import is still running. Canceled indicates it has been canceled by the user. Completed indicates import finished, successfully importing all discovered blobs into the Lustre namespace. CompletedPartial indicates the import finished but some blobs either were found to be conflicting and could not be imported or other errors were encountered. Failed means the import was unable to complete due to a fatal error.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The status message of the import job.
     */
    public /*out*/ readonly statusMessage!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The total blobs that have been imported since import began.
     */
    public /*out*/ readonly totalBlobsImported!: pulumi.Output<number>;
    /**
     * The total blob objects walked.
     */
    public /*out*/ readonly totalBlobsWalked!: pulumi.Output<number>;
    /**
     * Number of conflicts in the import job.
     */
    public /*out*/ readonly totalConflicts!: pulumi.Output<number>;
    /**
     * Number of errors in the import job.
     */
    public /*out*/ readonly totalErrors!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ImportJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportJobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.amlFilesystemName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'amlFilesystemName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["amlFilesystemName"] = args ? args.amlFilesystemName : undefined;
            resourceInputs["conflictResolutionMode"] = (args ? args.conflictResolutionMode : undefined) ?? "Fail";
            resourceInputs["importJobName"] = args ? args.importJobName : undefined;
            resourceInputs["importPrefixes"] = args ? args.importPrefixes : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maximumErrors"] = (args ? args.maximumErrors : undefined) ?? 0;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["blobsImportedPerSecond"] = undefined /*out*/;
            resourceInputs["blobsWalkedPerSecond"] = undefined /*out*/;
            resourceInputs["lastCompletionTime"] = undefined /*out*/;
            resourceInputs["lastStartedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalBlobsImported"] = undefined /*out*/;
            resourceInputs["totalBlobsWalked"] = undefined /*out*/;
            resourceInputs["totalConflicts"] = undefined /*out*/;
            resourceInputs["totalErrors"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["blobsImportedPerSecond"] = undefined /*out*/;
            resourceInputs["blobsWalkedPerSecond"] = undefined /*out*/;
            resourceInputs["conflictResolutionMode"] = undefined /*out*/;
            resourceInputs["importPrefixes"] = undefined /*out*/;
            resourceInputs["lastCompletionTime"] = undefined /*out*/;
            resourceInputs["lastStartedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maximumErrors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["totalBlobsImported"] = undefined /*out*/;
            resourceInputs["totalBlobsWalked"] = undefined /*out*/;
            resourceInputs["totalConflicts"] = undefined /*out*/;
            resourceInputs["totalErrors"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagecache/v20240301:ImportJob" }, { type: "azure-native:storagecache/v20240701:ImportJob" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ImportJob.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ImportJob resource.
 */
export interface ImportJobArgs {
    /**
     * Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    amlFilesystemName: pulumi.Input<string>;
    /**
     * How the import job will handle conflicts. For example, if the import job is trying to bring in a directory, but a file is at that path, how it handles it. Fail indicates that the import job should stop immediately and not do anything with the conflict. Skip indicates that it should pass over the conflict. OverwriteIfDirty causes the import job to delete and re-import the file or directory if it is a conflicting type, is dirty, or was not previously imported. OverwriteAlways extends OverwriteIfDirty to include releasing files that had been restored but were not dirty. Please reference https://learn.microsoft.com/en-us/azure/azure-managed-lustre/ for a thorough explanation of these resolution modes.
     */
    conflictResolutionMode?: pulumi.Input<string | types.enums.ConflictResolutionMode>;
    /**
     * Name for the import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    importJobName?: pulumi.Input<string>;
    /**
     * An array of blob paths/prefixes that get imported into the cluster namespace. It has '/' as the default value.
     */
    importPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Total non-conflict oriented errors the import job will tolerate before exiting with failure. -1 means infinite. 0 means exit immediately and is the default.
     */
    maximumErrors?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}