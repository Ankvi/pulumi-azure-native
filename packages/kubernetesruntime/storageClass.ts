import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A StorageClass resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters)
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2024-03-01.
 */
export class StorageClass extends pulumi.CustomResource {
    /**
     * Get an existing StorageClass resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageClass {
        return new StorageClass(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kubernetesruntime:StorageClass';

    /**
     * Returns true if the given object is an instance of StorageClass.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageClass {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageClass.__pulumiType;
    }

    /**
     * The access mode: [ReadWriteOnce, ReadWriteMany] or [ReadWriteOnce]
     */
    public readonly accessModes!: pulumi.Output<string[] | undefined>;
    /**
     * Volume can be expanded or not
     */
    public readonly allowVolumeExpansion!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Allow single data node failure
     */
    public readonly dataResilience!: pulumi.Output<string | undefined>;
    /**
     * Failover speed: NA, Slow, Fast
     */
    public readonly failoverSpeed!: pulumi.Output<string | undefined>;
    /**
     * Limitations of the storage class
     */
    public readonly limitations!: pulumi.Output<string[] | undefined>;
    /**
     * Additional mount options
     */
    public readonly mountOptions!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Performance tier
     */
    public readonly performance!: pulumi.Output<string | undefined>;
    /**
     * Selection priority when multiple storage classes meet the criteria. 0: Highest, -1: Never use
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Provisioner name
     */
    public readonly provisioner!: pulumi.Output<string | undefined>;
    /**
     * Resource provision state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Properties of the StorageClass
     */
    public readonly typeProperties!: pulumi.Output<types.outputs.BlobStorageClassTypePropertiesResponse | types.outputs.NativeStorageClassTypePropertiesResponse | types.outputs.NfsStorageClassTypePropertiesResponse | types.outputs.RwxStorageClassTypePropertiesResponse | types.outputs.SmbStorageClassTypePropertiesResponse>;
    /**
     * Binding mode of volumes: Immediate, WaitForFirstConsumer
     */
    public readonly volumeBindingMode!: pulumi.Output<string | undefined>;

    /**
     * Create a StorageClass resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageClassArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            if ((!args || args.typeProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'typeProperties'");
            }
            resourceInputs["accessModes"] = args ? args.accessModes : undefined;
            resourceInputs["allowVolumeExpansion"] = args ? args.allowVolumeExpansion : undefined;
            resourceInputs["dataResilience"] = args ? args.dataResilience : undefined;
            resourceInputs["failoverSpeed"] = args ? args.failoverSpeed : undefined;
            resourceInputs["limitations"] = args ? args.limitations : undefined;
            resourceInputs["mountOptions"] = args ? args.mountOptions : undefined;
            resourceInputs["performance"] = args ? args.performance : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["provisioner"] = args ? args.provisioner : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["storageClassName"] = args ? args.storageClassName : undefined;
            resourceInputs["typeProperties"] = args ? args.typeProperties : undefined;
            resourceInputs["volumeBindingMode"] = args ? args.volumeBindingMode : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessModes"] = undefined /*out*/;
            resourceInputs["allowVolumeExpansion"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataResilience"] = undefined /*out*/;
            resourceInputs["failoverSpeed"] = undefined /*out*/;
            resourceInputs["limitations"] = undefined /*out*/;
            resourceInputs["mountOptions"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["performance"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioner"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeProperties"] = undefined /*out*/;
            resourceInputs["volumeBindingMode"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetesruntime/v20231001preview:StorageClass" }, { type: "azure-native:kubernetesruntime/v20240301:StorageClass" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageClass.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageClass resource.
 */
export interface StorageClassArgs {
    /**
     * The access mode: [ReadWriteOnce, ReadWriteMany] or [ReadWriteOnce]
     */
    accessModes?: pulumi.Input<pulumi.Input<string | types.enums.AccessMode>[]>;
    /**
     * Volume can be expanded or not
     */
    allowVolumeExpansion?: pulumi.Input<string | types.enums.VolumeExpansion>;
    /**
     * Allow single data node failure
     */
    dataResilience?: pulumi.Input<string | types.enums.DataResilienceTier>;
    /**
     * Failover speed: NA, Slow, Fast
     */
    failoverSpeed?: pulumi.Input<string | types.enums.FailoverTier>;
    /**
     * Limitations of the storage class
     */
    limitations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Additional mount options
     */
    mountOptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Performance tier
     */
    performance?: pulumi.Input<string | types.enums.PerformanceTier>;
    /**
     * Selection priority when multiple storage classes meet the criteria. 0: Highest, -1: Never use
     */
    priority?: pulumi.Input<number>;
    /**
     * Provisioner name
     */
    provisioner?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The name of the the storage class
     */
    storageClassName?: pulumi.Input<string>;
    /**
     * Properties of the StorageClass
     */
    typeProperties: pulumi.Input<types.inputs.BlobStorageClassTypePropertiesArgs | types.inputs.NativeStorageClassTypePropertiesArgs | types.inputs.NfsStorageClassTypePropertiesArgs | types.inputs.RwxStorageClassTypePropertiesArgs | types.inputs.SmbStorageClassTypePropertiesArgs>;
    /**
     * Binding mode of volumes: Immediate, WaitForFirstConsumer
     */
    volumeBindingMode?: pulumi.Input<string | types.enums.VolumeBindingMode>;
}