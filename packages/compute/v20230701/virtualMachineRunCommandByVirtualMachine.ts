import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a Virtual Machine run command.
 */
export class VirtualMachineRunCommandByVirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineRunCommandByVirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineRunCommandByVirtualMachine {
        return new VirtualMachineRunCommandByVirtualMachine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20230701:VirtualMachineRunCommandByVirtualMachine';

    /**
     * Returns true if the given object is an instance of VirtualMachineRunCommandByVirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineRunCommandByVirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineRunCommandByVirtualMachine.__pulumiType;
    }

    /**
     * Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
     */
    public readonly asyncExecution!: pulumi.Output<boolean | undefined>;
    /**
     * User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged 
     */
    public readonly errorBlobManagedIdentity!: pulumi.Output<types.outputs.RunCommandManagedIdentityResponse | undefined>;
    /**
     * Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter.
     */
    public readonly errorBlobUri!: pulumi.Output<string | undefined>;
    /**
     * The virtual machine run command instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.VirtualMachineRunCommandInstanceViewResponse>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged 
     */
    public readonly outputBlobManagedIdentity!: pulumi.Output<types.outputs.RunCommandManagedIdentityResponse | undefined>;
    /**
     * Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. 
     */
    public readonly outputBlobUri!: pulumi.Output<string | undefined>;
    /**
     * The parameters used by the script.
     */
    public readonly parameters!: pulumi.Output<types.outputs.RunCommandInputParameterResponse[] | undefined>;
    /**
     * The parameters used by the script.
     */
    public readonly protectedParameters!: pulumi.Output<types.outputs.RunCommandInputParameterResponse[] | undefined>;
    /**
     * The provisioning state, which only appears in the response. If treatFailureAsDeploymentFailure set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If treatFailureAsDeploymentFailure set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results 
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies the user account password on the VM when executing the run command.
     */
    public readonly runAsPassword!: pulumi.Output<string | undefined>;
    /**
     * Specifies the user account on the VM when executing the run command.
     */
    public readonly runAsUser!: pulumi.Output<string | undefined>;
    /**
     * The source of the run command script.
     */
    public readonly source!: pulumi.Output<types.outputs.VirtualMachineRunCommandScriptSourceResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The timeout in seconds to execute the run command.
     */
    public readonly timeoutInSeconds!: pulumi.Output<number | undefined>;
    /**
     * Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results 
     */
    public readonly treatFailureAsDeploymentFailure!: pulumi.Output<boolean | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualMachineRunCommandByVirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineRunCommandByVirtualMachineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmName'");
            }
            resourceInputs["asyncExecution"] = (args ? args.asyncExecution : undefined) ?? false;
            resourceInputs["errorBlobManagedIdentity"] = args ? args.errorBlobManagedIdentity : undefined;
            resourceInputs["errorBlobUri"] = args ? args.errorBlobUri : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["outputBlobManagedIdentity"] = args ? args.outputBlobManagedIdentity : undefined;
            resourceInputs["outputBlobUri"] = args ? args.outputBlobUri : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["protectedParameters"] = args ? args.protectedParameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runAsPassword"] = args ? args.runAsPassword : undefined;
            resourceInputs["runAsUser"] = args ? args.runAsUser : undefined;
            resourceInputs["runCommandName"] = args ? args.runCommandName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeoutInSeconds"] = args ? args.timeoutInSeconds : undefined;
            resourceInputs["treatFailureAsDeploymentFailure"] = (args ? args.treatFailureAsDeploymentFailure : undefined) ?? false;
            resourceInputs["vmName"] = args ? args.vmName : undefined;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["asyncExecution"] = undefined /*out*/;
            resourceInputs["errorBlobManagedIdentity"] = undefined /*out*/;
            resourceInputs["errorBlobUri"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputBlobManagedIdentity"] = undefined /*out*/;
            resourceInputs["outputBlobUri"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["protectedParameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runAsPassword"] = undefined /*out*/;
            resourceInputs["runAsUser"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeoutInSeconds"] = undefined /*out*/;
            resourceInputs["treatFailureAsDeploymentFailure"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20200601:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20201201:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20210301:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20210401:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20210701:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20211101:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20220301:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20220801:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20221101:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20230301:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20230901:VirtualMachineRunCommandByVirtualMachine" }, { type: "azure-native:compute/v20240301:VirtualMachineRunCommandByVirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineRunCommandByVirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineRunCommandByVirtualMachine resource.
 */
export interface VirtualMachineRunCommandByVirtualMachineArgs {
    /**
     * Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
     */
    asyncExecution?: pulumi.Input<boolean>;
    /**
     * User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged 
     */
    errorBlobManagedIdentity?: pulumi.Input<types.inputs.RunCommandManagedIdentityArgs>;
    /**
     * Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter.
     */
    errorBlobUri?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged 
     */
    outputBlobManagedIdentity?: pulumi.Input<types.inputs.RunCommandManagedIdentityArgs>;
    /**
     * Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. 
     */
    outputBlobUri?: pulumi.Input<string>;
    /**
     * The parameters used by the script.
     */
    parameters?: pulumi.Input<pulumi.Input<types.inputs.RunCommandInputParameterArgs>[]>;
    /**
     * The parameters used by the script.
     */
    protectedParameters?: pulumi.Input<pulumi.Input<types.inputs.RunCommandInputParameterArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the user account password on the VM when executing the run command.
     */
    runAsPassword?: pulumi.Input<string>;
    /**
     * Specifies the user account on the VM when executing the run command.
     */
    runAsUser?: pulumi.Input<string>;
    /**
     * The name of the virtual machine run command.
     */
    runCommandName?: pulumi.Input<string>;
    /**
     * The source of the run command script.
     */
    source?: pulumi.Input<types.inputs.VirtualMachineRunCommandScriptSourceArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The timeout in seconds to execute the run command.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results 
     */
    treatFailureAsDeploymentFailure?: pulumi.Input<boolean>;
    /**
     * The name of the virtual machine where the run command should be created or updated.
     */
    vmName: pulumi.Input<string>;
}