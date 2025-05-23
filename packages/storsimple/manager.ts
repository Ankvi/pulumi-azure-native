import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The StorSimple Manager.
 *
 * Uses Azure REST API version 2017-06-01. In version 2.x of the Azure Native provider, it used API version 2017-06-01.
 */
export class Manager extends pulumi.CustomResource {
    /**
     * Get an existing Manager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Manager {
        return new Manager(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storsimple:Manager';

    /**
     * Returns true if the given object is an instance of Manager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Manager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Manager.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Represents the type of StorSimple Manager.
     */
    public readonly cisIntrinsicSettings!: pulumi.Output<types.outputs.ManagerIntrinsicSettingsResponse | undefined>;
    /**
     * The etag of the manager.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The geo location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Specifies the Sku.
     */
    public readonly sku!: pulumi.Output<types.outputs.ManagerSkuResponse | undefined>;
    /**
     * The tags attached to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Manager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cisIntrinsicSettings"] = args ? args.cisIntrinsicSettings : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cisIntrinsicSettings"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20161001:Manager" }, { type: "azure-native:storsimple/v20170601:Manager" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Manager.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Manager resource.
 */
export interface ManagerArgs {
    /**
     * Represents the type of StorSimple Manager.
     */
    cisIntrinsicSettings?: pulumi.Input<types.inputs.ManagerIntrinsicSettingsArgs>;
    /**
     * The geo location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The manager name
     */
    managerName?: pulumi.Input<string>;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the Sku.
     */
    sku?: pulumi.Input<types.inputs.ManagerSkuArgs>;
    /**
     * The tags attached to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}