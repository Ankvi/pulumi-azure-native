import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The description of the service.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:healthcareapis/v20231101:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    public readonly identity!: pulumi.Output<types.outputs.ServicesResourceResponseIdentity | undefined>;
    /**
     * The kind of the service.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The common properties of a service.
     */
    public readonly properties!: pulumi.Output<types.outputs.ServicesPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:healthcareapis:Service" }, { type: "azure-native:healthcareapis/v20180820preview:Service" }, { type: "azure-native:healthcareapis/v20190916:Service" }, { type: "azure-native:healthcareapis/v20200315:Service" }, { type: "azure-native:healthcareapis/v20200330:Service" }, { type: "azure-native:healthcareapis/v20210111:Service" }, { type: "azure-native:healthcareapis/v20210601preview:Service" }, { type: "azure-native:healthcareapis/v20211101:Service" }, { type: "azure-native:healthcareapis/v20220131preview:Service" }, { type: "azure-native:healthcareapis/v20220515:Service" }, { type: "azure-native:healthcareapis/v20220601:Service" }, { type: "azure-native:healthcareapis/v20221001preview:Service" }, { type: "azure-native:healthcareapis/v20221201:Service" }, { type: "azure-native:healthcareapis/v20230228:Service" }, { type: "azure-native:healthcareapis/v20230906:Service" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    identity?: pulumi.Input<types.inputs.ServicesResourceIdentityArgs>;
    /**
     * The kind of the service.
     */
    kind: pulumi.Input<types.enums.Kind>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The common properties of a service.
     */
    properties?: pulumi.Input<types.inputs.ServicesPropertiesArgs>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
