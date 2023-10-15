import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class representing a SuppressionList resource.
 * Azure REST API version: 2023-06-01-preview.
 */
export class SuppressionList extends pulumi.CustomResource {
    /**
     * Get an existing SuppressionList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SuppressionList {
        return new SuppressionList(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:communication:SuppressionList';

    /**
     * Returns true if the given object is an instance of SuppressionList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SuppressionList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SuppressionList.__pulumiType;
    }

    /**
     * The date the resource was created.
     */
    public /*out*/ readonly createdTimeStamp!: pulumi.Output<string>;
    /**
     * The location where the SuppressionListAddress data is stored at rest. This value is inherited from the parent Domains resource.
     */
    public /*out*/ readonly dataLocation!: pulumi.Output<string>;
    /**
     * The date the resource was last updated.
     */
    public /*out*/ readonly lastUpdatedTimeStamp!: pulumi.Output<string>;
    /**
     * The the name of the suppression list. This value must match one of the valid sender usernames of the sending domain.
     */
    public readonly listName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SuppressionList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SuppressionListArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.emailServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["emailServiceName"] = args ? args.emailServiceName : undefined;
            resourceInputs["listName"] = args ? args.listName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["suppressionListName"] = args ? args.suppressionListName : undefined;
            resourceInputs["createdTimeStamp"] = undefined /*out*/;
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["lastUpdatedTimeStamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdTimeStamp"] = undefined /*out*/;
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["lastUpdatedTimeStamp"] = undefined /*out*/;
            resourceInputs["listName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:communication/v20230601preview:SuppressionList" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SuppressionList.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SuppressionList resource.
 */
export interface SuppressionListArgs {
    /**
     * The name of the Domains resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The the name of the suppression list. This value must match one of the valid sender usernames of the sending domain.
     */
    listName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the suppression list.
     */
    suppressionListName?: pulumi.Input<string>;
}
