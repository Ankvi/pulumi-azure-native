import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings for upgrading an agentpool
     */
    export interface AgentPoolUpgradeSettingsArgs {
        /**
         * Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default
         */
        maxSurge?: pulumi.Input<string>;
    }

    /**
     * Kubelet configurations of agent nodes.
     */
    export interface KubeletConfigArgs {
        /**
         * Allowlist of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
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
         * Enable CPU CFS quota enforcement for containers that specify CPU limits.
         */
        cpuCfsQuota?: pulumi.Input<boolean>;
        /**
         * Sets CPU CFS quota period value.
         */
        cpuCfsQuotaPeriod?: pulumi.Input<string>;
        /**
         * CPU Manager policy to use.
         */
        cpuManagerPolicy?: pulumi.Input<string>;
        /**
         * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
         */
        failSwapOn?: pulumi.Input<boolean>;
        /**
         * The percent of disk usage after which image garbage collection is always run.
         */
        imageGcHighThreshold?: pulumi.Input<number>;
        /**
         * The percent of disk usage before which image garbage collection is never run.
         */
        imageGcLowThreshold?: pulumi.Input<number>;
        /**
         * The maximum number of processes per pod.
         */
        podMaxPids?: pulumi.Input<number>;
        /**
         * Topology Manager policy to use.
         */
        topologyManagerPolicy?: pulumi.Input<string>;
    }

    /**
     * OS configurations of Linux agent nodes.
     */
    export interface LinuxOSConfigArgs {
        /**
         * SwapFileSizeMB specifies size in MB of a swap file will be created on each node.
         */
        swapFileSizeMB?: pulumi.Input<number>;
        /**
         * Sysctl settings for Linux agent nodes.
         */
        sysctls?: pulumi.Input<SysctlConfigArgs>;
        /**
         * Transparent Huge Page defrag configuration.
         */
        transparentHugePageDefrag?: pulumi.Input<string>;
        /**
         * Transparent Huge Page enabled configuration.
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
