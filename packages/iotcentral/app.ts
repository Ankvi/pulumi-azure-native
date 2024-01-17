import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The IoT Central application.
 * Azure REST API version: 2021-06-01. Prior API version in Azure Native 1.x: 2021-06-01.
 *
 * Other available API versions: 2018-09-01, 2021-11-01-preview.
 */
export class App extends pulumi.CustomResource {
    /**
     * Get an existing App resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): App {
        return new App(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotcentral:App';

    /**
     * Returns true if the given object is an instance of App.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is App {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === App.__pulumiType;
    }

    /**
     * The ID of the application.
     */
    public /*out*/ readonly applicationId!: pulumi.Output<string>;
    /**
     * The display name of the application.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The managed identities for the IoT Central application.
     */
    public readonly identity!: pulumi.Output<types.outputs.SystemAssignedServiceIdentityResponse | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The ARM resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A valid instance SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.AppSkuInfoResponse>;
    /**
     * The current state of the application.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The subdomain of the application.
     */
    public readonly subdomain!: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
     */
    public readonly template!: pulumi.Output<string | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a App resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subdomain"] = args ? args.subdomain : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["applicationId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["applicationId"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["subdomain"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["template"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotcentral/v20180901:App" }, { type: "azure-native:iotcentral/v20210601:App" }, { type: "azure-native:iotcentral/v20211101preview:App" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(App.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    /**
     * The display name of the application.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The managed identities for the IoT Central application.
     */
    identity?: pulumi.Input<types.inputs.SystemAssignedServiceIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT Central application.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ARM resource name of the IoT Central application.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * A valid instance SKU.
     */
    sku: pulumi.Input<types.inputs.AppSkuInfoArgs>;
    /**
     * The subdomain of the application.
     */
    subdomain?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
     */
    template?: pulumi.Input<string>;
}