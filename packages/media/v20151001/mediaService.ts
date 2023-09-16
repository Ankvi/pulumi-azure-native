import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The properties of a Media Service resource.
 */
export class MediaService extends pulumi.CustomResource {
    /**
     * Get an existing MediaService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MediaService {
        return new MediaService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media/v20151001:MediaService';

    /**
     * Returns true if the given object is an instance of MediaService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaService.__pulumiType;
    }

    /**
     * Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored.
     */
    public /*out*/ readonly apiEndpoints!: pulumi.Output<types.outputs.media.v20151001.ApiEndpointResponse[]>;
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The storage accounts for this resource.
     */
    public readonly storageAccounts!: pulumi.Output<types.outputs.media.v20151001.StorageAccountResponse[] | undefined>;
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MediaService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mediaServiceName"] = args ? args.mediaServiceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["apiEndpoints"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiEndpoints"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageAccounts"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media:MediaService" }, { type: "azure-native:media/v20180330preview:MediaService" }, { type: "azure-native:media/v20180601preview:MediaService" }, { type: "azure-native:media/v20180701:MediaService" }, { type: "azure-native:media/v20200501:MediaService" }, { type: "azure-native:media/v20210501:MediaService" }, { type: "azure-native:media/v20210601:MediaService" }, { type: "azure-native:media/v20211101:MediaService" }, { type: "azure-native:media/v20230101:MediaService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MediaService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MediaService resource.
 */
export interface MediaServiceArgs {
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Media Service.
     */
    mediaServiceName?: pulumi.Input<string>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage accounts for this resource.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<types.inputs.media.v20151001.StorageAccountArgs>[]>;
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
