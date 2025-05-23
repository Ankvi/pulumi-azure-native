import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Update details
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-02-01, 2023-03-01, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-09-01-preview, 2024-12-01-preview, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Update extends pulumi.CustomResource {
    /**
     * Get an existing Update resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Update {
        return new Update(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:Update';

    /**
     * Returns true if the given object is an instance of Update.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Update {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Update.__pulumiType;
    }

    /**
     * Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type.
     */
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * Indicates the way the update content can be downloaded.
     */
    public readonly availabilityType!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of the update.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name of the Update
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Last time the package-specific checks were run.
     */
    public readonly healthCheckDate!: pulumi.Output<string | undefined>;
    /**
     * Date that the update was installed.
     */
    public readonly installedDate!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Minimum Sbe Version of the update.
     */
    public readonly minSbeVersionRequired!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Brief message with instructions for updates of AvailabilityType Notify.
     */
    public readonly notifyMessage!: pulumi.Output<string | undefined>;
    /**
     * Path where the update package is available.
     */
    public readonly packagePath!: pulumi.Output<string | undefined>;
    /**
     * Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content.
     */
    public readonly packageSizeInMb!: pulumi.Output<number | undefined>;
    /**
     * Customer-visible type of the update.
     */
    public readonly packageType!: pulumi.Output<string | undefined>;
    /**
     * If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
     */
    public readonly prerequisites!: pulumi.Output<types.outputs.UpdatePrerequisiteResponse[] | undefined>;
    /**
     * Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded.
     */
    public readonly progressPercentage!: pulumi.Output<number | undefined>;
    /**
     * Provisioning state of the Updates proxy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Publisher of the update package.
     */
    public readonly publisher!: pulumi.Output<string | undefined>;
    /**
     * Link to release notes for the update.
     */
    public readonly releaseLink!: pulumi.Output<string | undefined>;
    /**
     * State of the update as it relates to this stamp.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of the update.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Update resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UpdateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["availabilityType"] = args ? args.availabilityType : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["healthCheckDate"] = args ? args.healthCheckDate : undefined;
            resourceInputs["installedDate"] = args ? args.installedDate : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minSbeVersionRequired"] = args ? args.minSbeVersionRequired : undefined;
            resourceInputs["notifyMessage"] = args ? args.notifyMessage : undefined;
            resourceInputs["packagePath"] = args ? args.packagePath : undefined;
            resourceInputs["packageSizeInMb"] = args ? args.packageSizeInMb : undefined;
            resourceInputs["packageType"] = args ? args.packageType : undefined;
            resourceInputs["prerequisites"] = args ? args.prerequisites : undefined;
            resourceInputs["progressPercentage"] = args ? args.progressPercentage : undefined;
            resourceInputs["publisher"] = args ? args.publisher : undefined;
            resourceInputs["releaseLink"] = args ? args.releaseLink : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["updateName"] = args ? args.updateName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalProperties"] = undefined /*out*/;
            resourceInputs["availabilityType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["healthCheckDate"] = undefined /*out*/;
            resourceInputs["installedDate"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minSbeVersionRequired"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notifyMessage"] = undefined /*out*/;
            resourceInputs["packagePath"] = undefined /*out*/;
            resourceInputs["packageSizeInMb"] = undefined /*out*/;
            resourceInputs["packageType"] = undefined /*out*/;
            resourceInputs["prerequisites"] = undefined /*out*/;
            resourceInputs["progressPercentage"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisher"] = undefined /*out*/;
            resourceInputs["releaseLink"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20221201:Update" }, { type: "azure-native:azurestackhci/v20221215preview:Update" }, { type: "azure-native:azurestackhci/v20230201:Update" }, { type: "azure-native:azurestackhci/v20230301:Update" }, { type: "azure-native:azurestackhci/v20230601:Update" }, { type: "azure-native:azurestackhci/v20230801:Update" }, { type: "azure-native:azurestackhci/v20230801preview:Update" }, { type: "azure-native:azurestackhci/v20231101preview:Update" }, { type: "azure-native:azurestackhci/v20240101:Update" }, { type: "azure-native:azurestackhci/v20240215preview:Update" }, { type: "azure-native:azurestackhci/v20240401:Update" }, { type: "azure-native:azurestackhci/v20240901preview:Update" }, { type: "azure-native:azurestackhci/v20241201preview:Update" }, { type: "azure-native:azurestackhci/v20250201preview:Update" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Update.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Update resource.
 */
export interface UpdateArgs {
    /**
     * Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type.
     */
    additionalProperties?: pulumi.Input<string>;
    /**
     * Indicates the way the update content can be downloaded.
     */
    availabilityType?: pulumi.Input<string | types.enums.AvailabilityType>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Description of the update.
     */
    description?: pulumi.Input<string>;
    /**
     * Display name of the Update
     */
    displayName?: pulumi.Input<string>;
    /**
     * Last time the package-specific checks were run.
     */
    healthCheckDate?: pulumi.Input<string>;
    /**
     * Date that the update was installed.
     */
    installedDate?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Minimum Sbe Version of the update.
     */
    minSbeVersionRequired?: pulumi.Input<string>;
    /**
     * Brief message with instructions for updates of AvailabilityType Notify.
     */
    notifyMessage?: pulumi.Input<string>;
    /**
     * Path where the update package is available.
     */
    packagePath?: pulumi.Input<string>;
    /**
     * Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content.
     */
    packageSizeInMb?: pulumi.Input<number>;
    /**
     * Customer-visible type of the update.
     */
    packageType?: pulumi.Input<string>;
    /**
     * If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
     */
    prerequisites?: pulumi.Input<pulumi.Input<types.inputs.UpdatePrerequisiteArgs>[]>;
    /**
     * Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded.
     */
    progressPercentage?: pulumi.Input<number>;
    /**
     * Publisher of the update package.
     */
    publisher?: pulumi.Input<string>;
    /**
     * Link to release notes for the update.
     */
    releaseLink?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * State of the update as it relates to this stamp.
     */
    state?: pulumi.Input<string | types.enums.State>;
    /**
     * The name of the Update
     */
    updateName?: pulumi.Input<string>;
    /**
     * Version of the update.
     */
    version?: pulumi.Input<string>;
}