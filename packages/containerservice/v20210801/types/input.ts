import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings for upgrading an agentpool
     */
    export interface AgentPoolUpgradeSettingsArgs {
        /**
         * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
         */
        maxSurge?: pulumi.Input<string>;
    }

    /**
     * Data used when creating a target resource from a source resource.
     */
    export interface CreationDataArgs {
        /**
         * This is the ARM ID of the source object to be used to create the target object.
         */
        sourceResourceId?: pulumi.Input<string>;
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface KubeletConfigArgs {
        /**
         * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
         */
        allowedUnsafeSysctls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
         */
        containerLogMaxFiles?: pulumi.Input<number>;
        /**
         * The maximum size (e.g. 10Mi) of container log file before it is rotated.
         */
        containerLogMaxSizeMB?: pulumi.Input<number>;
        /**
         * The default is true.
         */
        cpuCfsQuota?: pulumi.Input<boolean>;
        /**
         * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
         */
        cpuCfsQuotaPeriod?: pulumi.Input<string>;
        /**
         * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
         */
        cpuManagerPolicy?: pulumi.Input<string>;
        /**
         * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
         */
        failSwapOn?: pulumi.Input<boolean>;
        /**
         * To disable image garbage collection, set to 100. The default is 85%
         */
        imageGcHighThreshold?: pulumi.Input<number>;
        /**
         * This cannot be set higher than imageGcHighThreshold. The default is 80%
         */
        imageGcLowThreshold?: pulumi.Input<number>;
        /**
         * The maximum number of processes per pod.
         */
        podMaxPids?: pulumi.Input<number>;
        /**
         * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
         */
        topologyManagerPolicy?: pulumi.Input<string>;
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface LinuxOSConfigArgs {
        /**
         * The size in MB of a swap file that will be created on each node.
         */
        swapFileSizeMB?: pulumi.Input<number>;
        /**
         * Sysctl settings for Linux agent nodes.
         */
        sysctls?: pulumi.Input<SysctlConfigArgs>;
        /**
         * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageDefrag?: pulumi.Input<string>;
        /**
         * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageEnabled?: pulumi.Input<string>;
    }

    /**
     * Sysctl settings for Linux agent nodes.
     */
    export interface SysctlConfigArgs {
        /**
         * Sysctl setting fs.aio-max-nr.
         */
        fsAioMaxNr?: pulumi.Input<number>;
        /**
         * Sysctl setting fs.file-max.
         */
        fsFileMax?: pulumi.Input<number>;
        /**
         * Sysctl setting fs.inotify.max_user_watches.
         */
        fsInotifyMaxUserWatches?: pulumi.Input<number>;
        /**
         * Sysctl setting fs.nr_open.
         */
        fsNrOpen?: pulumi.Input<number>;
        /**
         * Sysctl setting kernel.threads-max.
         */
        kernelThreadsMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.netdev_max_backlog.
         */
        netCoreNetdevMaxBacklog?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.optmem_max.
         */
        netCoreOptmemMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.rmem_default.
         */
        netCoreRmemDefault?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.rmem_max.
         */
        netCoreRmemMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.somaxconn.
         */
        netCoreSomaxconn?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.wmem_default.
         */
        netCoreWmemDefault?: pulumi.Input<number>;
        /**
         * Sysctl setting net.core.wmem_max.
         */
        netCoreWmemMax?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.ip_local_port_range.
         */
        netIpv4IpLocalPortRange?: pulumi.Input<string>;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
         */
        netIpv4NeighDefaultGcThresh1?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
         */
        netIpv4NeighDefaultGcThresh2?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
         */
        netIpv4NeighDefaultGcThresh3?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_fin_timeout.
         */
        netIpv4TcpFinTimeout?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_probes.
         */
        netIpv4TcpKeepaliveProbes?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_time.
         */
        netIpv4TcpKeepaliveTime?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_max_syn_backlog.
         */
        netIpv4TcpMaxSynBacklog?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_max_tw_buckets.
         */
        netIpv4TcpMaxTwBuckets?: pulumi.Input<number>;
        /**
         * Sysctl setting net.ipv4.tcp_tw_reuse.
         */
        netIpv4TcpTwReuse?: pulumi.Input<boolean>;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_intvl.
         */
        netIpv4TcpkeepaliveIntvl?: pulumi.Input<number>;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_buckets.
         */
        netNetfilterNfConntrackBuckets?: pulumi.Input<number>;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_max.
         */
        netNetfilterNfConntrackMax?: pulumi.Input<number>;
        /**
         * Sysctl setting vm.max_map_count.
         */
        vmMaxMapCount?: pulumi.Input<number>;
        /**
         * Sysctl setting vm.swappiness.
         */
        vmSwappiness?: pulumi.Input<number>;
        /**
         * Sysctl setting vm.vfs_cache_pressure.
         */
        vmVfsCachePressure?: pulumi.Input<number>;
    }
