import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Frontend Subresource of Traffic Controller.
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
    public static readonly __pulumiType = 'azure-native:servicenetworking/v20221001preview:FrontendsInterface';

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
     * Frontend IP Address Version (Optional).
     */
    public readonly ipAddressVersion!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Frontend Mode (Optional).
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * test doc
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Frontend Public IP Address (Optional).
     */
    public readonly publicIPAddress!: pulumi.Output<types.outputs.FrontendPropertiesIPAddressResponse | undefined>;
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
            resourceInputs["ipAddressVersion"] = args ? args.ipAddressVersion : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["publicIPAddress"] = args ? args.publicIPAddress : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trafficControllerName"] = args ? args.trafficControllerName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["ipAddressVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddress"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicenetworking:FrontendsInterface" }, { type: "azure-native:servicenetworking/v20230501preview:FrontendsInterface" }, { type: "azure-native:servicenetworking/v20231101:FrontendsInterface" }] };
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
     * Frontend IP Address Version (Optional).
     */
    ipAddressVersion?: pulumi.Input<types.enums.FrontendIPAddressVersion>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Frontend Mode (Optional).
     */
    mode?: pulumi.Input<types.enums.FrontendMode>;
    /**
     * Frontend Public IP Address (Optional).
     */
    publicIPAddress?: pulumi.Input<types.inputs.FrontendPropertiesIPAddressArgs>;
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