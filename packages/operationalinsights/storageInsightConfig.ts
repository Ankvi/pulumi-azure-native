import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The top level storage insight resource container.
 *
 * Uses Azure REST API version 2023-09-01. In version 2.x of the Azure Native provider, it used API version 2020-08-01.
 *
 * Other available API versions: 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class StorageInsightConfig extends pulumi.CustomResource {
    /**
     * Get an existing StorageInsightConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageInsightConfig {
        return new StorageInsightConfig(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights:StorageInsightConfig';

    /**
     * Returns true if the given object is an instance of StorageInsightConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageInsightConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageInsightConfig.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The names of the blob containers that the workspace should read
     */
    public readonly containers!: pulumi.Output<string[] | undefined>;
    /**
     * The ETag of the storage insight.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the storage insight
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.StorageInsightStatusResponse>;
    /**
     * The storage account connection details
     */
    public readonly storageAccount!: pulumi.Output<types.outputs.StorageAccountResponse>;
    /**
     * The names of the Azure tables that the workspace should read
     */
    public readonly tables!: pulumi.Output<string[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StorageInsightConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageInsightConfigArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccount'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["containers"] = args ? args.containers : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccount"] = args ? args.storageAccount : undefined;
            resourceInputs["storageInsightName"] = args ? args.storageInsightName : undefined;
            resourceInputs["tables"] = args ? args.tables : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containers"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageAccount"] = undefined /*out*/;
            resourceInputs["tables"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20150320:StorageInsightConfig" }, { type: "azure-native:operationalinsights/v20200301preview:StorageInsightConfig" }, { type: "azure-native:operationalinsights/v20200801:StorageInsightConfig" }, { type: "azure-native:operationalinsights/v20230901:StorageInsightConfig" }, { type: "azure-native:operationalinsights/v20250201:StorageInsightConfig" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageInsightConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageInsightConfig resource.
 */
export interface StorageInsightConfigArgs {
    /**
     * The names of the blob containers that the workspace should read
     */
    containers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ETag of the storage insight.
     */
    eTag?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage account connection details
     */
    storageAccount: pulumi.Input<types.inputs.StorageAccountArgs>;
    /**
     * Name of the storageInsightsConfigs resource
     */
    storageInsightName?: pulumi.Input<string>;
    /**
     * The names of the Azure tables that the workspace should read
     */
    tables?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}