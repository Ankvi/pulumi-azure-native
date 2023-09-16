import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Application accelerator resource
 */
export class ApplicationAccelerator extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationAccelerator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationAccelerator {
        return new ApplicationAccelerator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform/v20230901preview:ApplicationAccelerator';

    /**
     * Returns true if the given object is an instance of ApplicationAccelerator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationAccelerator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationAccelerator.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Application accelerator properties payload
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.appplatform.v20230901preview.ApplicationAcceleratorPropertiesResponse>;
    /**
     * Sku of the application accelerator resource
     */
    public readonly sku!: pulumi.Output<types.outputs.appplatform.v20230901preview.SkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.appplatform.v20230901preview.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApplicationAccelerator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationAcceleratorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["applicationAcceleratorName"] = args ? args.applicationAcceleratorName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sku"] = args ? (args.sku ? pulumi.output(args.sku).apply(types.inputs.appplatform.v20230901preview.skuArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform:ApplicationAccelerator" }, { type: "azure-native:appplatform/v20221101preview:ApplicationAccelerator" }, { type: "azure-native:appplatform/v20230101preview:ApplicationAccelerator" }, { type: "azure-native:appplatform/v20230301preview:ApplicationAccelerator" }, { type: "azure-native:appplatform/v20230501preview:ApplicationAccelerator" }, { type: "azure-native:appplatform/v20230701preview:ApplicationAccelerator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApplicationAccelerator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationAccelerator resource.
 */
export interface ApplicationAcceleratorArgs {
    /**
     * The name of the application accelerator.
     */
    applicationAcceleratorName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Sku of the application accelerator resource
     */
    sku?: pulumi.Input<types.inputs.appplatform.v20230901preview.SkuArgs>;
}
