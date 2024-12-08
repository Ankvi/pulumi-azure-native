import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Image template is an ARM resource managed by Microsoft.VirtualMachineImages provider
 * Azure REST API version: 2022-07-01. Prior API version in Azure Native 1.x: 2020-02-14.
 *
 * Other available API versions: 2023-07-01, 2024-02-01.
 */
export class VirtualMachineImageTemplate extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineImageTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineImageTemplate {
        return new VirtualMachineImageTemplate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:virtualmachineimages:VirtualMachineImageTemplate';

    /**
     * Returns true if the given object is an instance of VirtualMachineImageTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineImageTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineImageTemplate.__pulumiType;
    }

    /**
     * Maximum duration to wait while building the image template (includes all customizations, optimization, validations, and distributions). Omit or specify 0 to use the default (4 hours).
     */
    public readonly buildTimeoutInMinutes!: pulumi.Output<number | undefined>;
    /**
     * Specifies the properties used to describe the customization steps of the image, like Image source etc
     */
    public readonly customize!: pulumi.Output<(types.outputs.ImageTemplateFileCustomizerResponse | types.outputs.ImageTemplatePowerShellCustomizerResponse | types.outputs.ImageTemplateRestartCustomizerResponse | types.outputs.ImageTemplateShellCustomizerResponse | types.outputs.ImageTemplateWindowsUpdateCustomizerResponse)[] | undefined>;
    /**
     * The distribution targets where the image output needs to go to.
     */
    public readonly distribute!: pulumi.Output<(types.outputs.ImageTemplateManagedImageDistributorResponse | types.outputs.ImageTemplateSharedImageDistributorResponse | types.outputs.ImageTemplateVhdDistributorResponse)[]>;
    /**
     * The staging resource group id in the same subscription as the image template that will be used to build the image. This read-only field differs from 'stagingResourceGroup' only if the value specified in the 'stagingResourceGroup' field is empty.
     */
    public /*out*/ readonly exactStagingResourceGroup!: pulumi.Output<string>;
    /**
     * The identity of the image template, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.ImageTemplateIdentityResponse>;
    /**
     * State of 'run' that is currently executing or was last executed.
     */
    public /*out*/ readonly lastRunStatus!: pulumi.Output<types.outputs.ImageTemplateLastRunStatusResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies optimization to be performed on image.
     */
    public readonly optimize!: pulumi.Output<types.outputs.ImageTemplatePropertiesResponseOptimize | undefined>;
    /**
     * Provisioning error, if any
     */
    public /*out*/ readonly provisioningError!: pulumi.Output<types.outputs.ProvisioningErrorResponse>;
    /**
     * Provisioning state of the resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies the properties used to describe the source image.
     */
    public readonly source!: pulumi.Output<types.outputs.ImageTemplateManagedImageSourceResponse | types.outputs.ImageTemplatePlatformImageSourceResponse | types.outputs.ImageTemplateSharedImageVersionSourceResponse>;
    /**
     * The staging resource group id in the same subscription as the image template that will be used to build the image. If this field is empty, a resource group with a random name will be created. If the resource group specified in this field doesn't exist, it will be created with the same name. If the resource group specified exists, it must be empty and in the same region as the image template. The resource group created will be deleted during template deletion if this field is empty or the resource group specified doesn't exist, but if the resource group specified exists the resources created in the resource group will be deleted during template deletion and the resource group itself will remain.
     */
    public readonly stagingResourceGroup!: pulumi.Output<string | undefined>;
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
     * Configuration options and list of validations to be performed on the resulting image.
     */
    public readonly validate!: pulumi.Output<types.outputs.ImageTemplatePropertiesResponseValidate | undefined>;
    /**
     * Describes how virtual machine is set up to build images
     */
    public readonly vmProfile!: pulumi.Output<types.outputs.ImageTemplateVmProfileResponse | undefined>;

    /**
     * Create a VirtualMachineImageTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineImageTemplateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.distribute === undefined) && !opts.urn) {
                throw new Error("Missing required property 'distribute'");
            }
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["buildTimeoutInMinutes"] = (args ? args.buildTimeoutInMinutes : undefined) ?? 0;
            resourceInputs["customize"] = args ? args.customize : undefined;
            resourceInputs["distribute"] = args ? args.distribute : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["imageTemplateName"] = args ? args.imageTemplateName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["optimize"] = args ? args.optimize : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["stagingResourceGroup"] = args ? args.stagingResourceGroup : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["validate"] = args ? (args.validate ? pulumi.output(args.validate).apply(types.inputs.imageTemplatePropertiesValidateArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["vmProfile"] = args ? (args.vmProfile ? pulumi.output(args.vmProfile).apply(types.inputs.imageTemplateVmProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["exactStagingResourceGroup"] = undefined /*out*/;
            resourceInputs["lastRunStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningError"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["buildTimeoutInMinutes"] = undefined /*out*/;
            resourceInputs["customize"] = undefined /*out*/;
            resourceInputs["distribute"] = undefined /*out*/;
            resourceInputs["exactStagingResourceGroup"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["lastRunStatus"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["optimize"] = undefined /*out*/;
            resourceInputs["provisioningError"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["stagingResourceGroup"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validate"] = undefined /*out*/;
            resourceInputs["vmProfile"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:virtualmachineimages/v20180201preview:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20190201preview:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20190501preview:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20200214:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20211001:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20220214:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20220701:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20230701:VirtualMachineImageTemplate" }, { type: "azure-native:virtualmachineimages/v20240201:VirtualMachineImageTemplate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineImageTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineImageTemplate resource.
 */
export interface VirtualMachineImageTemplateArgs {
    /**
     * Maximum duration to wait while building the image template (includes all customizations, optimization, validations, and distributions). Omit or specify 0 to use the default (4 hours).
     */
    buildTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Specifies the properties used to describe the customization steps of the image, like Image source etc
     */
    customize?: pulumi.Input<pulumi.Input<types.inputs.ImageTemplateFileCustomizerArgs | types.inputs.ImageTemplatePowerShellCustomizerArgs | types.inputs.ImageTemplateRestartCustomizerArgs | types.inputs.ImageTemplateShellCustomizerArgs | types.inputs.ImageTemplateWindowsUpdateCustomizerArgs>[]>;
    /**
     * The distribution targets where the image output needs to go to.
     */
    distribute: pulumi.Input<pulumi.Input<types.inputs.ImageTemplateManagedImageDistributorArgs | types.inputs.ImageTemplateSharedImageDistributorArgs | types.inputs.ImageTemplateVhdDistributorArgs>[]>;
    /**
     * The identity of the image template, if configured.
     */
    identity: pulumi.Input<types.inputs.ImageTemplateIdentityArgs>;
    /**
     * The name of the image Template
     */
    imageTemplateName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies optimization to be performed on image.
     */
    optimize?: pulumi.Input<types.inputs.ImageTemplatePropertiesOptimizeArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the properties used to describe the source image.
     */
    source: pulumi.Input<types.inputs.ImageTemplateManagedImageSourceArgs | types.inputs.ImageTemplatePlatformImageSourceArgs | types.inputs.ImageTemplateSharedImageVersionSourceArgs>;
    /**
     * The staging resource group id in the same subscription as the image template that will be used to build the image. If this field is empty, a resource group with a random name will be created. If the resource group specified in this field doesn't exist, it will be created with the same name. If the resource group specified exists, it must be empty and in the same region as the image template. The resource group created will be deleted during template deletion if this field is empty or the resource group specified doesn't exist, but if the resource group specified exists the resources created in the resource group will be deleted during template deletion and the resource group itself will remain.
     */
    stagingResourceGroup?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration options and list of validations to be performed on the resulting image.
     */
    validate?: pulumi.Input<types.inputs.ImageTemplatePropertiesValidateArgs>;
    /**
     * Describes how virtual machine is set up to build images
     */
    vmProfile?: pulumi.Input<types.inputs.ImageTemplateVmProfileArgs>;
}