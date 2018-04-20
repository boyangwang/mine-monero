
      #!/usr/bin/env bash
      parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
      
      cd "$parent_path"

      sudo chmod +x ./miner/bin/minerd
      
      ./miner/bin/minerd -o stratum+tcp://etnpool.minekitten.io:7777 -u etnkCdYGVcpMwEtQUouXxZjPCdTjGNis3J6pNgiLrCrGK7pP4351pGNGeLPpPaBXhoXmqLGLtx1hPb8CEjVEbfS578fzCmn2pz -p x
      