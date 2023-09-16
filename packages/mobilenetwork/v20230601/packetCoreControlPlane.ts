import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Packet core control plane resource.
 */
export class PacketCoreControlPlane extends pulumi.CustomResource {
    /**
     * Get an existing PacketCoreControlPlane resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PacketCoreControlPlane {
        return new PacketCoreControlPlane(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilenetwork/v20230601:PacketCoreControlPlane';

    /**
     * Returns true if the given object is an instance of PacketCoreControlPlane.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PacketCoreControlPlane {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PacketCoreControlPlane.__pulumiType;
    }

    /**
     * The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface.
     */
    public readonly controlPlaneAccessInterface!: pulumi.Output<types.outputs.mobilenetwork.v20230601.InterfacePropertiesResponse>;
    /**
     * The core network technology generation (5G core or EPC / 4G core).
     */
    public readonly coreNetworkTechnology!: pulumi.Output<string | undefined>;
    /**
     * Configuration for uploading packet core diagnostics
     */
    public readonly diagnosticsUpload!: pulumi.Output<types.outputs.mobilenetwork.v20230601.DiagnosticsUploadConfigurationResponse | undefined>;
    /**
     * The identity used to retrieve the ingress certificate from Azure key vault.
     */
    public readonly identity!: pulumi.Output<types.outputs.mobilenetwork.v20230601.ManagedServiceIdentityResponse | undefined>;
    /**
     * The installation state of the packet core control plane resource.
     */
    public readonly installation!: pulumi.Output<types.outputs.mobilenetwork.v20230601.InstallationResponse | undefined>;
    /**
     * The currently installed version of the packet core software.
     */
    public /*out*/ readonly installedVersion!: pulumi.Output<string>;
    /**
     * Settings to allow interoperability with third party components e.g. RANs and UEs.
     */
    public readonly interopSettings!: pulumi.Output<any | undefined>;
    /**
     * The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
     */
    public readonly localDiagnosticsAccess!: pulumi.Output<types.outputs.mobilenetwork.v20230601.LocalDiagnosticsAccessConfigurationResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The platform where the packet core is deployed.
     */
    public readonly platform!: pulumi.Output<types.outputs.mobilenetwork.v20230601.PlatformConfigurationResponse>;
    /**
     * The provisioning state of the packet core control plane resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The previous version of the packet core software that was deployed. Used when performing the rollback action.
     */
    public /*out*/ readonly rollbackVersion!: pulumi.Output<string>;
    /**
     * Site(s) under which this packet core control plane should be deployed. The sites must be in the same location as the packet core control plane.
     */
    public readonly sites!: pulumi.Output<types.outputs.mobilenetwork.v20230601.SiteResourceIdResponse[]>;
    /**
     * The SKU defining the throughput and SIM allowances for this packet core control plane deployment.
     */
    public readonly sku!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.mobilenetwork.v20230601.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The MTU (in bytes) signaled to the UE. The same MTU is set on the user plane data links for all data networks. The MTU set on the user plane access link is calculated to be 60 bytes greater than this value to allow for GTP encapsulation.
     */
    public readonly ueMtu!: pulumi.Output<number | undefined>;
    /**
     * The desired version of the packet core software.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a PacketCoreControlPlane resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PacketCoreControlPlaneArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.controlPlaneAccessInterface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneAccessInterface'");
            }
            if ((!args || args.localDiagnosticsAccess === undefined) && !opts.urn) {
                throw new Error("Missing required property 'localDiagnosticsAccess'");
            }
            if ((!args || args.platform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'platform'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sites === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sites'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["controlPlaneAccessInterface"] = args ? args.controlPlaneAccessInterface : undefined;
            resourceInputs["coreNetworkTechnology"] = args ? args.coreNetworkTechnology : undefined;
            resourceInputs["diagnosticsUpload"] = args ? args.diagnosticsUpload : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["installation"] = args ? (args.installation ? pulumi.output(args.installation).apply(types.inputs.mobilenetwork.v20230601.installationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["interopSettings"] = args ? args.interopSettings : undefined;
            resourceInputs["localDiagnosticsAccess"] = args ? args.localDiagnosticsAccess : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["packetCoreControlPlaneName"] = args ? args.packetCoreControlPlaneName : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sites"] = args ? args.sites : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["ueMtu"] = (args ? args.ueMtu : undefined) ?? 1440;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["installedVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rollbackVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["controlPlaneAccessInterface"] = undefined /*out*/;
            resourceInputs["coreNetworkTechnology"] = undefined /*out*/;
            resourceInputs["diagnosticsUpload"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["installation"] = undefined /*out*/;
            resourceInputs["installedVersion"] = undefined /*out*/;
            resourceInputs["interopSettings"] = undefined /*out*/;
            resourceInputs["localDiagnosticsAccess"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platform"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rollbackVersion"] = undefined /*out*/;
            resourceInputs["sites"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["ueMtu"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilenetwork:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20220301preview:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20220401preview:PacketCoreControlPlane" }, { type: "azure-native:mobilenetwork/v20221101:PacketCoreControlPlane" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PacketCoreControlPlane.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PacketCoreControlPlane resource.
 */
export interface PacketCoreControlPlaneArgs {
    /**
     * The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface.
     */
    controlPlaneAccessInterface: pulumi.Input<types.inputs.mobilenetwork.v20230601.InterfacePropertiesArgs>;
    /**
     * The core network technology generation (5G core or EPC / 4G core).
     */
    coreNetworkTechnology?: pulumi.Input<string | types.enums.v20230601.CoreNetworkType>;
    /**
     * Configuration for uploading packet core diagnostics
     */
    diagnosticsUpload?: pulumi.Input<types.inputs.mobilenetwork.v20230601.DiagnosticsUploadConfigurationArgs>;
    /**
     * The identity used to retrieve the ingress certificate from Azure key vault.
     */
    identity?: pulumi.Input<types.inputs.mobilenetwork.v20230601.ManagedServiceIdentityArgs>;
    /**
     * The installation state of the packet core control plane resource.
     */
    installation?: pulumi.Input<types.inputs.mobilenetwork.v20230601.InstallationArgs>;
    /**
     * Settings to allow interoperability with third party components e.g. RANs and UEs.
     */
    interopSettings?: any;
    /**
     * The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
     */
    localDiagnosticsAccess: pulumi.Input<types.inputs.mobilenetwork.v20230601.LocalDiagnosticsAccessConfigurationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName?: pulumi.Input<string>;
    /**
     * The platform where the packet core is deployed.
     */
    platform: pulumi.Input<types.inputs.mobilenetwork.v20230601.PlatformConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site(s) under which this packet core control plane should be deployed. The sites must be in the same location as the packet core control plane.
     */
    sites: pulumi.Input<pulumi.Input<types.inputs.mobilenetwork.v20230601.SiteResourceIdArgs>[]>;
    /**
     * The SKU defining the throughput and SIM allowances for this packet core control plane deployment.
     */
    sku: pulumi.Input<string | types.enums.v20230601.BillingSku>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The MTU (in bytes) signaled to the UE. The same MTU is set on the user plane data links for all data networks. The MTU set on the user plane access link is calculated to be 60 bytes greater than this value to allow for GTP encapsulation.
     */
    ueMtu?: pulumi.Input<number>;
    /**
     * The desired version of the packet core software.
     */
    version?: pulumi.Input<string>;
}
