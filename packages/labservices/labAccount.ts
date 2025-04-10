import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a lab account.
 *
 * Uses Azure REST API version 2018-10-15. In version 1.x of the Azure Native provider, it used API version 2018-10-15.
 */
export class LabAccount extends pulumi.CustomResource {
    /**
     * Get an existing LabAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LabAccount {
        return new LabAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:labservices:LabAccount';

    /**
     * Returns true if the given object is an instance of LabAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LabAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LabAccount.__pulumiType;
    }

    /**
     * Represents if region selection is enabled
     */
    public readonly enabledRegionSelection!: pulumi.Output<boolean | undefined>;
    /**
     * The details of the latest operation. ex: status, error
     */
    public /*out*/ readonly latestOperationResult!: pulumi.Output<types.outputs.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Represents the size configuration under the lab account
     */
    public /*out*/ readonly sizeConfiguration!: pulumi.Output<types.outputs.SizeConfigurationPropertiesResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public readonly uniqueIdentifier!: pulumi.Output<string | undefined>;

    /**
     * Create a LabAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["enabledRegionSelection"] = args ? args.enabledRegionSelection : undefined;
            resourceInputs["labAccountName"] = args ? args.labAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uniqueIdentifier"] = args ? args.uniqueIdentifier : undefined;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sizeConfiguration"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["enabledRegionSelection"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sizeConfiguration"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices/v20181015:LabAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LabAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LabAccount resource.
 */
export interface LabAccountArgs {
    /**
     * Represents if region selection is enabled
     */
    enabledRegionSelection?: pulumi.Input<boolean>;
    /**
     * The name of the lab Account.
     */
    labAccountName?: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    uniqueIdentifier?: pulumi.Input<string>;
}