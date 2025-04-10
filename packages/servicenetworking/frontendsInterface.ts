import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Frontend Subresource of Traffic Controller.
 *
 * Uses Azure REST API version 2023-05-01-preview. In version 1.x of the Azure Native provider, it used API version 2022-10-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-11-01, 2024-05-01-preview, 2025-01-01, 2025-03-01-preview.
 */
export class FrontendsInterface extends pulumi.CustomResource {
    /**
     * Get an existing FrontendsInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FrontendsInterface {
        return new FrontendsInterface(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicenetworking:FrontendsInterface';

    /**
     * Returns true if the given object is an instance of FrontendsInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FrontendsInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FrontendsInterface.__pulumiType;
    }

    /**
     * The Fully Qualified Domain Name of the DNS record associated to a Traffic Controller frontend.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning State of Traffic Controller Frontend Resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FrontendsInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FrontendsInterfaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.trafficControllerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficControllerName'");
            }
            resourceInputs["frontendName"] = args ? args.frontendName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trafficControllerName"] = args ? args.trafficControllerName : undefined;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicenetworking/v20221001preview:FrontendsInterface" }, { type: "azure-native:servicenetworking/v20230501preview:FrontendsInterface" }, { type: "azure-native:servicenetworking/v20231101:FrontendsInterface" }, { type: "azure-native:servicenetworking/v20240501preview:FrontendsInterface" }, { type: "azure-native:servicenetworking/v20250101:FrontendsInterface" }, { type: "azure-native:servicenetworking/v20250301preview:FrontendsInterface" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FrontendsInterface.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FrontendsInterface resource.
 */
export interface FrontendsInterfaceArgs {
    /**
     * Frontends
     */
    frontendName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
}