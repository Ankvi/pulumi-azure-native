import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The storage container resource definition.
 */
export class StoragecontainerRetrieve extends pulumi.CustomResource {
    /**
     * Get an existing StoragecontainerRetrieve resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StoragecontainerRetrieve {
        return new StoragecontainerRetrieve(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20210901preview:StoragecontainerRetrieve';

    /**
     * Returns true if the given object is an instance of StoragecontainerRetrieve.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StoragecontainerRetrieve {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StoragecontainerRetrieve.__pulumiType;
    }

    /**
     * Amount of space available on the disk in MB
     */
    public /*out*/ readonly availableSizeMB!: pulumi.Output<number>;
    /**
     * Total size of the disk in MB
     */
    public /*out*/ readonly containerSizeMB!: pulumi.Output<number>;
    public readonly extendedLocation!: pulumi.Output<types.outputs.StoragecontainersResponseExtendedLocation | undefined>;
    /**
     * The resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Path of the storage container on the disk
     */
    public readonly path!: pulumi.Output<string | undefined>;
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * name of the object to be used in moc
     */
    public readonly resourceName!: pulumi.Output<string | undefined>;
    /**
     * storageContainerStatus defines the observed state of storagecontainers
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.StorageContainerStatusResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StoragecontainerRetrieve resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoragecontainerRetrieveArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["storagecontainersName"] = args ? args.storagecontainersName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["availableSizeMB"] = undefined /*out*/;
            resourceInputs["containerSizeMB"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["availableSizeMB"] = undefined /*out*/;
            resourceInputs["containerSizeMB"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceName"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20210901preview:storagecontainerRetrieve" }, { type: "azure-native:azurestackhci:StoragecontainerRetrieve" }, { type: "azure-native:azurestackhci:storagecontainerRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:StoragecontainerRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:storagecontainerRetrieve" }, { type: "azure-native:azurestackhci/v20230701preview:StoragecontainerRetrieve" }, { type: "azure-native:azurestackhci/v20230701preview:storagecontainerRetrieve" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StoragecontainerRetrieve.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StoragecontainerRetrieve resource.
 */
export interface StoragecontainerRetrieveArgs {
    extendedLocation?: pulumi.Input<types.inputs.StoragecontainersExtendedLocationArgs>;
    /**
     * The resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Path of the storage container on the disk
     */
    path?: pulumi.Input<string>;
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the object to be used in moc
     */
    resourceName?: pulumi.Input<string>;
    storagecontainersName?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
