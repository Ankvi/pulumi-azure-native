import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A share data transfer object.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class Share extends pulumi.CustomResource {
    /**
     * Get an existing Share resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Share {
        return new Share(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:Share';

    /**
     * Returns true if the given object is an instance of Share.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Share {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Share.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Time at which the share was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Share description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Share kind.
     */
    public readonly shareKind!: pulumi.Output<string | undefined>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Share terms.
     */
    public readonly terms!: pulumi.Output<string | undefined>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Email of the user who created the resource
     */
    public /*out*/ readonly userEmail!: pulumi.Output<string>;
    /**
     * Name of the user who created the resource
     */
    public /*out*/ readonly userName!: pulumi.Output<string>;

    /**
     * Create a Share resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareKind"] = args ? args.shareKind : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["terms"] = args ? args.terms : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEmail"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["shareKind"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["terms"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEmail"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:Share" }, { type: "azure-native:datashare/v20191101:Share" }, { type: "azure-native:datashare/v20200901:Share" }, { type: "azure-native:datashare/v20201001preview:Share" }, { type: "azure-native:datashare/v20210801:Share" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Share.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Share resource.
 */
export interface ShareArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Share description.
     */
    description?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Share kind.
     */
    shareKind?: pulumi.Input<string | types.enums.ShareKind>;
    /**
     * The name of the share.
     */
    shareName?: pulumi.Input<string>;
    /**
     * Share terms.
     */
    terms?: pulumi.Input<string>;
}