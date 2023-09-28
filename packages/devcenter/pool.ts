import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A pool of Virtual Machines.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2022-09-01-preview
 */
export class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pool {
        return new Pool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter:Pool';

    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pool.__pulumiType;
    }

    /**
     * Name of a Dev Box definition in parent Project of this Pool
     */
    public readonly devBoxDefinitionName!: pulumi.Output<string>;
    /**
     * Overall health status of the Pool. Indicates whether or not the Pool is available to create Dev Boxes.
     */
    public /*out*/ readonly healthStatus!: pulumi.Output<string>;
    /**
     * Details on the Pool health status to help diagnose issues. This is only populated when the pool status indicates the pool is in a non-healthy state
     */
    public /*out*/ readonly healthStatusDetails!: pulumi.Output<types.outputs.HealthStatusDetailResponse[]>;
    /**
     * Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created.
     */
    public readonly licenseType!: pulumi.Output<string>;
    /**
     * Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box.
     */
    public readonly localAdministrator!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Name of a Network Connection in parent Project of this Pool
     */
    public readonly networkConnectionName!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Stop on disconnect configuration settings for Dev Boxes created in this pool.
     */
    public readonly stopOnDisconnect!: pulumi.Output<types.outputs.StopOnDisconnectConfigurationResponse | undefined>;
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
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.devBoxDefinitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devBoxDefinitionName'");
            }
            if ((!args || args.licenseType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseType'");
            }
            if ((!args || args.localAdministrator === undefined) && !opts.urn) {
                throw new Error("Missing required property 'localAdministrator'");
            }
            if ((!args || args.networkConnectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkConnectionName'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["devBoxDefinitionName"] = args ? args.devBoxDefinitionName : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["localAdministrator"] = args ? args.localAdministrator : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkConnectionName"] = args ? args.networkConnectionName : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["stopOnDisconnect"] = args ? args.stopOnDisconnect : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["healthStatus"] = undefined /*out*/;
            resourceInputs["healthStatusDetails"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["devBoxDefinitionName"] = undefined /*out*/;
            resourceInputs["healthStatus"] = undefined /*out*/;
            resourceInputs["healthStatusDetails"] = undefined /*out*/;
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["localAdministrator"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkConnectionName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["stopOnDisconnect"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20220801preview:Pool" }, { type: "azure-native:devcenter/v20220901preview:Pool" }, { type: "azure-native:devcenter/v20221012preview:Pool" }, { type: "azure-native:devcenter/v20221111preview:Pool" }, { type: "azure-native:devcenter/v20230101preview:Pool" }, { type: "azure-native:devcenter/v20230401:Pool" }, { type: "azure-native:devcenter/v20230801preview:Pool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * Name of a Dev Box definition in parent Project of this Pool
     */
    devBoxDefinitionName: pulumi.Input<string>;
    /**
     * Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created.
     */
    licenseType: pulumi.Input<string | types.enums.LicenseType>;
    /**
     * Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box.
     */
    localAdministrator: pulumi.Input<string | types.enums.LocalAdminStatus>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of a Network Connection in parent Project of this Pool
     */
    networkConnectionName: pulumi.Input<string>;
    /**
     * Name of the pool.
     */
    poolName?: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Stop on disconnect configuration settings for Dev Boxes created in this pool.
     */
    stopOnDisconnect?: pulumi.Input<types.inputs.StopOnDisconnectConfigurationArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
