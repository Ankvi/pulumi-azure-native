import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Php workload resource
 */
export class PhpWorkload extends pulumi.CustomResource {
    /**
     * Get an existing PhpWorkload resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PhpWorkload {
        return new PhpWorkload(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads/v20211201preview:PhpWorkload';

    /**
     * Returns true if the given object is an instance of PhpWorkload.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PhpWorkload {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PhpWorkload.__pulumiType;
    }

    /**
     * Admin user profile used for VM and VMSS
     */
    public readonly adminUserProfile!: pulumi.Output<types.outputs.UserProfileResponse>;
    /**
     * The infra resources for PHP workload will be created in this location
     */
    public readonly appLocation!: pulumi.Output<string>;
    /**
     * Backup profile
     */
    public readonly backupProfile!: pulumi.Output<types.outputs.BackupProfileResponse | undefined>;
    /**
     * Cache profile
     */
    public readonly cacheProfile!: pulumi.Output<types.outputs.CacheProfileResponse | undefined>;
    /**
     * Controller VM profile
     */
    public readonly controllerProfile!: pulumi.Output<types.outputs.NodeProfileResponse>;
    /**
     * Database profile
     */
    public readonly databaseProfile!: pulumi.Output<types.outputs.DatabaseProfileResponse>;
    /**
     * File share profile
     */
    public readonly fileshareProfile!: pulumi.Output<types.outputs.FileshareProfileResponse | undefined>;
    /**
     * Identity for the resource. Currently not supported
     */
    public readonly identity!: pulumi.Output<types.outputs.PhpWorkloadResourceResponseIdentity | undefined>;
    /**
     * Indicates which kind of php workload this resource represent e.g WordPress
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Managed resource group configuration of the workload
     */
    public readonly managedResourceGroupConfiguration!: pulumi.Output<types.outputs.ManagedRGConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network profile
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * PHP profile
     */
    public readonly phpProfile!: pulumi.Output<types.outputs.PhpProfileResponse | undefined>;
    /**
     * Php workload resource provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Search profile
     */
    public readonly searchProfile!: pulumi.Output<types.outputs.SearchProfileResponse | undefined>;
    /**
     * Site profile
     */
    public readonly siteProfile!: pulumi.Output<types.outputs.SiteProfileResponse | undefined>;
    /**
     * Php workloads SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
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
     * VMSS web nodes profile
     */
    public readonly webNodesProfile!: pulumi.Output<types.outputs.VmssNodesProfileResponse>;

    /**
     * Create a PhpWorkload resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PhpWorkloadArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.adminUserProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminUserProfile'");
            }
            if ((!args || args.appLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appLocation'");
            }
            if ((!args || args.controllerProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controllerProfile'");
            }
            if ((!args || args.databaseProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseProfile'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.webNodesProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'webNodesProfile'");
            }
            resourceInputs["adminUserProfile"] = args ? args.adminUserProfile : undefined;
            resourceInputs["appLocation"] = args ? args.appLocation : undefined;
            resourceInputs["backupProfile"] = args ? args.backupProfile : undefined;
            resourceInputs["cacheProfile"] = args ? args.cacheProfile : undefined;
            resourceInputs["controllerProfile"] = args ? args.controllerProfile : undefined;
            resourceInputs["databaseProfile"] = args ? args.databaseProfile : undefined;
            resourceInputs["fileshareProfile"] = args ? args.fileshareProfile : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupConfiguration"] = args ? args.managedResourceGroupConfiguration : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["phpProfile"] = args ? args.phpProfile : undefined;
            resourceInputs["phpWorkloadName"] = args ? args.phpWorkloadName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["searchProfile"] = args ? args.searchProfile : undefined;
            resourceInputs["siteProfile"] = args ? args.siteProfile : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["webNodesProfile"] = args ? args.webNodesProfile : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["adminUserProfile"] = undefined /*out*/;
            resourceInputs["appLocation"] = undefined /*out*/;
            resourceInputs["backupProfile"] = undefined /*out*/;
            resourceInputs["cacheProfile"] = undefined /*out*/;
            resourceInputs["controllerProfile"] = undefined /*out*/;
            resourceInputs["databaseProfile"] = undefined /*out*/;
            resourceInputs["fileshareProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedResourceGroupConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["phpProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["searchProfile"] = undefined /*out*/;
            resourceInputs["siteProfile"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["webNodesProfile"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PhpWorkload.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PhpWorkload resource.
 */
export interface PhpWorkloadArgs {
    /**
     * Admin user profile used for VM and VMSS
     */
    adminUserProfile: pulumi.Input<types.inputs.UserProfileArgs>;
    /**
     * The infra resources for PHP workload will be created in this location
     */
    appLocation: pulumi.Input<string>;
    /**
     * Backup profile
     */
    backupProfile?: pulumi.Input<types.inputs.BackupProfileArgs>;
    /**
     * Cache profile
     */
    cacheProfile?: pulumi.Input<types.inputs.CacheProfileArgs>;
    /**
     * Controller VM profile
     */
    controllerProfile: pulumi.Input<types.inputs.NodeProfileArgs>;
    /**
     * Database profile
     */
    databaseProfile: pulumi.Input<types.inputs.DatabaseProfileArgs>;
    /**
     * File share profile
     */
    fileshareProfile?: pulumi.Input<types.inputs.FileshareProfileArgs>;
    /**
     * Identity for the resource. Currently not supported
     */
    identity?: pulumi.Input<types.inputs.PhpWorkloadResourceIdentityArgs>;
    /**
     * Indicates which kind of php workload this resource represent e.g WordPress
     */
    kind: pulumi.Input<string | types.enums.WorkloadKind>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Managed resource group configuration of the workload
     */
    managedResourceGroupConfiguration?: pulumi.Input<types.inputs.ManagedRGConfigurationArgs>;
    /**
     * Network profile
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * PHP profile
     */
    phpProfile?: pulumi.Input<types.inputs.PhpProfileArgs>;
    /**
     * Php workload name
     */
    phpWorkloadName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Search profile
     */
    searchProfile?: pulumi.Input<types.inputs.SearchProfileArgs>;
    /**
     * Site profile
     */
    siteProfile?: pulumi.Input<types.inputs.SiteProfileArgs>;
    /**
     * Php workloads SKU
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VMSS web nodes profile
     */
    webNodesProfile: pulumi.Input<types.inputs.VmssNodesProfileArgs>;
}