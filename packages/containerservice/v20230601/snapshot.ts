import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A node pool snapshot resource.
 */
export class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Snapshot {
        return new Snapshot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice/v20230601:Snapshot';

    /**
     * Returns true if the given object is an instance of Snapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Snapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Snapshot.__pulumiType;
    }

    /**
     * CreationData to be used to specify the source agent pool resource ID to create this snapshot.
     */
    public readonly creationData!: pulumi.Output<types.outputs.CreationDataResponse | undefined>;
    /**
     * Whether to use a FIPS-enabled OS.
     */
    public /*out*/ readonly enableFIPS!: pulumi.Output<boolean>;
    /**
     * The version of Kubernetes.
     */
    public /*out*/ readonly kubernetesVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The version of node image.
     */
    public /*out*/ readonly nodeImageVersion!: pulumi.Output<string>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
     */
    public /*out*/ readonly osSku!: pulumi.Output<string>;
    /**
     * The operating system type. The default is Linux.
     */
    public /*out*/ readonly osType!: pulumi.Output<string>;
    /**
     * The type of a snapshot. The default is NodePool.
     */
    public readonly snapshotType!: pulumi.Output<string | undefined>;
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
     * The size of the VM.
     */
    public /*out*/ readonly vmSize!: pulumi.Output<string>;

    /**
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["creationData"] = args ? args.creationData : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["snapshotType"] = args ? args.snapshotType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["enableFIPS"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageVersion"] = undefined /*out*/;
            resourceInputs["osSku"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
        } else {
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["enableFIPS"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageVersion"] = undefined /*out*/;
            resourceInputs["osSku"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["snapshotType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:Snapshot" }, { type: "azure-native:containerservice/v20210801:Snapshot" }, { type: "azure-native:containerservice/v20210901:Snapshot" }, { type: "azure-native:containerservice/v20211001:Snapshot" }, { type: "azure-native:containerservice/v20211101preview:Snapshot" }, { type: "azure-native:containerservice/v20220101:Snapshot" }, { type: "azure-native:containerservice/v20220102preview:Snapshot" }, { type: "azure-native:containerservice/v20220201:Snapshot" }, { type: "azure-native:containerservice/v20220202preview:Snapshot" }, { type: "azure-native:containerservice/v20220301:Snapshot" }, { type: "azure-native:containerservice/v20220302preview:Snapshot" }, { type: "azure-native:containerservice/v20220401:Snapshot" }, { type: "azure-native:containerservice/v20220402preview:Snapshot" }, { type: "azure-native:containerservice/v20220502preview:Snapshot" }, { type: "azure-native:containerservice/v20220601:Snapshot" }, { type: "azure-native:containerservice/v20220602preview:Snapshot" }, { type: "azure-native:containerservice/v20220701:Snapshot" }, { type: "azure-native:containerservice/v20220702preview:Snapshot" }, { type: "azure-native:containerservice/v20220802preview:Snapshot" }, { type: "azure-native:containerservice/v20220803preview:Snapshot" }, { type: "azure-native:containerservice/v20220901:Snapshot" }, { type: "azure-native:containerservice/v20220902preview:Snapshot" }, { type: "azure-native:containerservice/v20221002preview:Snapshot" }, { type: "azure-native:containerservice/v20221101:Snapshot" }, { type: "azure-native:containerservice/v20221102preview:Snapshot" }, { type: "azure-native:containerservice/v20230101:Snapshot" }, { type: "azure-native:containerservice/v20230102preview:Snapshot" }, { type: "azure-native:containerservice/v20230201:Snapshot" }, { type: "azure-native:containerservice/v20230202preview:Snapshot" }, { type: "azure-native:containerservice/v20230301:Snapshot" }, { type: "azure-native:containerservice/v20230302preview:Snapshot" }, { type: "azure-native:containerservice/v20230401:Snapshot" }, { type: "azure-native:containerservice/v20230402preview:Snapshot" }, { type: "azure-native:containerservice/v20230501:Snapshot" }, { type: "azure-native:containerservice/v20230502preview:Snapshot" }, { type: "azure-native:containerservice/v20230602preview:Snapshot" }, { type: "azure-native:containerservice/v20230701:Snapshot" }, { type: "azure-native:containerservice/v20230702preview:Snapshot" }, { type: "azure-native:containerservice/v20230801:Snapshot" }, { type: "azure-native:containerservice/v20230802preview:Snapshot" }, { type: "azure-native:containerservice/v20230901:Snapshot" }, { type: "azure-native:containerservice/v20230902preview:Snapshot" }, { type: "azure-native:containerservice/v20231001:Snapshot" }, { type: "azure-native:containerservice/v20231002preview:Snapshot" }, { type: "azure-native:containerservice/v20231101:Snapshot" }, { type: "azure-native:containerservice/v20231102preview:Snapshot" }, { type: "azure-native:containerservice/v20240101:Snapshot" }, { type: "azure-native:containerservice/v20240102preview:Snapshot" }, { type: "azure-native:containerservice/v20240201:Snapshot" }, { type: "azure-native:containerservice/v20240202preview:Snapshot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Snapshot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    /**
     * CreationData to be used to specify the source agent pool resource ID to create this snapshot.
     */
    creationData?: pulumi.Input<types.inputs.CreationDataArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The type of a snapshot. The default is NodePool.
     */
    snapshotType?: pulumi.Input<string | types.enums.SnapshotType>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}