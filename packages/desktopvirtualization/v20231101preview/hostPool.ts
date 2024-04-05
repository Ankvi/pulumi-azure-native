import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a HostPool definition.
 */
export class HostPool extends pulumi.CustomResource {
    /**
     * Get an existing HostPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HostPool {
        return new HostPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization/v20231101preview:HostPool';

    /**
     * Returns true if the given object is an instance of HostPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HostPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HostPool.__pulumiType;
    }

    /**
     * The session host configuration for updating agent, monitoring agent, and stack component.
     */
    public readonly agentUpdate!: pulumi.Output<types.outputs.AgentUpdatePropertiesResponse | undefined>;
    /**
     * List of App Attach Package links.
     */
    public /*out*/ readonly appAttachPackageReferences!: pulumi.Output<string[]>;
    /**
     * List of applicationGroup links.
     */
    public /*out*/ readonly applicationGroupReferences!: pulumi.Output<string[]>;
    /**
     * Is cloud pc resource.
     */
    public /*out*/ readonly cloudPcResource!: pulumi.Output<boolean>;
    /**
     * Custom rdp property of HostPool.
     */
    public readonly customRdpProperty!: pulumi.Output<string | undefined>;
    /**
     * Description of HostPool.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Friendly name of HostPool.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * HostPool type for desktop.
     */
    public readonly hostPoolType!: pulumi.Output<string>;
    public readonly identity!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponseIdentity | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The type of the load balancer.
     */
    public readonly loadBalancerType!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * The type of management for this hostpool, Automated or Standard. The default value is Automated.
     */
    public readonly managementType!: pulumi.Output<string | undefined>;
    /**
     * The max session limit of HostPool.
     */
    public readonly maxSessionLimit!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ObjectId of HostPool. (internal use)
     */
    public /*out*/ readonly objectId!: pulumi.Output<string>;
    /**
     * PersonalDesktopAssignment type for HostPool.
     */
    public readonly personalDesktopAssignmentType!: pulumi.Output<string | undefined>;
    public readonly plan!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponsePlan | undefined>;
    /**
     * The type of preferred application group type, default to Desktop Application Group
     */
    public readonly preferredAppGroupType!: pulumi.Output<string>;
    /**
     * List of private endpoint connection associated with the specified resource
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The registration info of HostPool.
     */
    public readonly registrationInfo!: pulumi.Output<types.outputs.RegistrationInfoResponse | undefined>;
    /**
     * The ring number of HostPool.
     */
    public readonly ring!: pulumi.Output<number | undefined>;
    public readonly sku!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponseSku | undefined>;
    /**
     * ClientId for the registered Relying Party used to issue WVD SSO certificates.
     */
    public readonly ssoClientId!: pulumi.Output<string | undefined>;
    /**
     * Path to Azure KeyVault storing the secret used for communication to ADFS.
     */
    public readonly ssoClientSecretKeyVaultPath!: pulumi.Output<string | undefined>;
    /**
     * The type of single sign on Secret Type.
     */
    public readonly ssoSecretType!: pulumi.Output<string | undefined>;
    /**
     * URL to customer ADFS server for signing WVD SSO certificates.
     */
    public readonly ssoadfsAuthority!: pulumi.Output<string | undefined>;
    /**
     * The flag to turn on/off StartVMOnConnect feature.
     */
    public readonly startVMOnConnect!: pulumi.Output<boolean | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
     * Is validation environment.
     */
    public readonly validationEnvironment!: pulumi.Output<boolean | undefined>;
    /**
     * VM template for sessionhosts configuration within hostpool.
     */
    public readonly vmTemplate!: pulumi.Output<string | undefined>;

    /**
     * Create a HostPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HostPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hostPoolType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostPoolType'");
            }
            if ((!args || args.loadBalancerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerType'");
            }
            if ((!args || args.preferredAppGroupType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'preferredAppGroupType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agentUpdate"] = args ? args.agentUpdate : undefined;
            resourceInputs["customRdpProperty"] = args ? args.customRdpProperty : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["hostPoolName"] = args ? args.hostPoolName : undefined;
            resourceInputs["hostPoolType"] = args ? args.hostPoolType : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["loadBalancerType"] = args ? args.loadBalancerType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["managementType"] = args ? args.managementType : undefined;
            resourceInputs["maxSessionLimit"] = args ? args.maxSessionLimit : undefined;
            resourceInputs["personalDesktopAssignmentType"] = args ? args.personalDesktopAssignmentType : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["preferredAppGroupType"] = args ? args.preferredAppGroupType : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["registrationInfo"] = args ? args.registrationInfo : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ring"] = args ? args.ring : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["ssoClientId"] = args ? args.ssoClientId : undefined;
            resourceInputs["ssoClientSecretKeyVaultPath"] = args ? args.ssoClientSecretKeyVaultPath : undefined;
            resourceInputs["ssoSecretType"] = args ? args.ssoSecretType : undefined;
            resourceInputs["ssoadfsAuthority"] = args ? args.ssoadfsAuthority : undefined;
            resourceInputs["startVMOnConnect"] = args ? args.startVMOnConnect : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["validationEnvironment"] = args ? args.validationEnvironment : undefined;
            resourceInputs["vmTemplate"] = args ? args.vmTemplate : undefined;
            resourceInputs["appAttachPackageReferences"] = undefined /*out*/;
            resourceInputs["applicationGroupReferences"] = undefined /*out*/;
            resourceInputs["cloudPcResource"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["agentUpdate"] = undefined /*out*/;
            resourceInputs["appAttachPackageReferences"] = undefined /*out*/;
            resourceInputs["applicationGroupReferences"] = undefined /*out*/;
            resourceInputs["cloudPcResource"] = undefined /*out*/;
            resourceInputs["customRdpProperty"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["hostPoolType"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["loadBalancerType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["managementType"] = undefined /*out*/;
            resourceInputs["maxSessionLimit"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["personalDesktopAssignmentType"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["preferredAppGroupType"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["registrationInfo"] = undefined /*out*/;
            resourceInputs["ring"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["ssoClientId"] = undefined /*out*/;
            resourceInputs["ssoClientSecretKeyVaultPath"] = undefined /*out*/;
            resourceInputs["ssoSecretType"] = undefined /*out*/;
            resourceInputs["ssoadfsAuthority"] = undefined /*out*/;
            resourceInputs["startVMOnConnect"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationEnvironment"] = undefined /*out*/;
            resourceInputs["vmTemplate"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization:HostPool" }, { type: "azure-native:desktopvirtualization/v20190123preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20190924preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20191210preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20200921preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20201019preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20201102preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20201110preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20210114preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20210201preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20210309preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20210401preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20210712:HostPool" }, { type: "azure-native:desktopvirtualization/v20210903preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20220210preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20220401preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20220909:HostPool" }, { type: "azure-native:desktopvirtualization/v20221014preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20230707preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20230905:HostPool" }, { type: "azure-native:desktopvirtualization/v20231004preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20240116preview:HostPool" }, { type: "azure-native:desktopvirtualization/v20240306preview:HostPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HostPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HostPool resource.
 */
export interface HostPoolArgs {
    /**
     * The session host configuration for updating agent, monitoring agent, and stack component.
     */
    agentUpdate?: pulumi.Input<types.inputs.AgentUpdatePropertiesArgs>;
    /**
     * Custom rdp property of HostPool.
     */
    customRdpProperty?: pulumi.Input<string>;
    /**
     * Description of HostPool.
     */
    description?: pulumi.Input<string>;
    /**
     * Friendly name of HostPool.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName?: pulumi.Input<string>;
    /**
     * HostPool type for desktop.
     */
    hostPoolType: pulumi.Input<string | types.enums.HostPoolType>;
    identity?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetIdentityArgs>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * The type of the load balancer.
     */
    loadBalancerType: pulumi.Input<string | types.enums.LoadBalancerType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * The type of management for this hostpool, Automated or Standard. The default value is Automated.
     */
    managementType?: pulumi.Input<string | types.enums.ManagementType>;
    /**
     * The max session limit of HostPool.
     */
    maxSessionLimit?: pulumi.Input<number>;
    /**
     * PersonalDesktopAssignment type for HostPool.
     */
    personalDesktopAssignmentType?: pulumi.Input<string | types.enums.PersonalDesktopAssignmentType>;
    plan?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetPlanArgs>;
    /**
     * The type of preferred application group type, default to Desktop Application Group
     */
    preferredAppGroupType: pulumi.Input<string | types.enums.PreferredAppGroupType>;
    /**
     * Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.HostpoolPublicNetworkAccess>;
    /**
     * The registration info of HostPool.
     */
    registrationInfo?: pulumi.Input<types.inputs.RegistrationInfoArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ring number of HostPool.
     */
    ring?: pulumi.Input<number>;
    sku?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetSkuArgs>;
    /**
     * ClientId for the registered Relying Party used to issue WVD SSO certificates.
     */
    ssoClientId?: pulumi.Input<string>;
    /**
     * Path to Azure KeyVault storing the secret used for communication to ADFS.
     */
    ssoClientSecretKeyVaultPath?: pulumi.Input<string>;
    /**
     * The type of single sign on Secret Type.
     */
    ssoSecretType?: pulumi.Input<string | types.enums.SSOSecretType>;
    /**
     * URL to customer ADFS server for signing WVD SSO certificates.
     */
    ssoadfsAuthority?: pulumi.Input<string>;
    /**
     * The flag to turn on/off StartVMOnConnect feature.
     */
    startVMOnConnect?: pulumi.Input<boolean>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Is validation environment.
     */
    validationEnvironment?: pulumi.Input<boolean>;
    /**
     * VM template for sessionhosts configuration within hostpool.
     */
    vmTemplate?: pulumi.Input<string>;
}