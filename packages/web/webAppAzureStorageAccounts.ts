import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * AzureStorageInfo dictionary resource.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01.
 */
export class WebAppAzureStorageAccounts extends pulumi.CustomResource {
    /**
     * Get an existing WebAppAzureStorageAccounts resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppAzureStorageAccounts {
        return new WebAppAzureStorageAccounts(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppAzureStorageAccounts';

    /**
     * Returns true if the given object is an instance of WebAppAzureStorageAccounts.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppAzureStorageAccounts {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppAzureStorageAccounts.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure storage accounts.
     */
    public readonly properties!: pulumi.Output<{[key: string]: types.outputs.AzureStorageInfoValueResponse}>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppAzureStorageAccounts resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppAzureStorageAccountsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20180201:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20181101:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20190801:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20200601:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20200901:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20201001:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20201201:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20210101:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20210115:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20210201:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20210301:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20220301:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20220901:WebAppAzureStorageAccounts" }, { type: "azure-native:web/v20230101:WebAppAzureStorageAccounts" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppAzureStorageAccounts.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppAzureStorageAccounts resource.
 */
export interface WebAppAzureStorageAccountsArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Azure storage accounts.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.AzureStorageInfoValueArgs>}>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}