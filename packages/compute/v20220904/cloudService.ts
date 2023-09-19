import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes the cloud service.
 */
export class CloudService extends pulumi.CustomResource {
    /**
     * Get an existing CloudService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudService {
        return new CloudService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20220904:CloudService';

    /**
     * Returns true if the given object is an instance of CloudService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudService.__pulumiType;
    }

    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Cloud service properties
     */
    public readonly properties!: pulumi.Output<types.outputs.CloudServicePropertiesResponse>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of logical availability zone of the resource. List should contain only 1 zone where cloud service should be provisioned. This field is optional.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a CloudService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cloudServiceName"] = args ? args.cloudServiceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:CloudService" }, { type: "azure-native:compute/v20201001preview:CloudService" }, { type: "azure-native:compute/v20210301:CloudService" }, { type: "azure-native:compute/v20220404:CloudService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CloudService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CloudService resource.
 */
export interface CloudServiceArgs {
    /**
     * Name of the cloud service.
     */
    cloudServiceName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Cloud service properties
     */
    properties?: pulumi.Input<types.inputs.CloudServicePropertiesArgs>;
    /**
     * Name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of logical availability zone of the resource. List should contain only 1 zone where cloud service should be provisioned. This field is optional.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
