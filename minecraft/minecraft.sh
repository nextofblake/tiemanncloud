#!/bin/bash

main() {
    # Bootstrap
    METHOD=$1

    # Execution
    if [[ $METHOD == "build" ]]; then
        cp ./minecraft/eula.txt $HOME/minecraft
        cp ./minecraft/ops.json $HOME/minecraft
        cp ./minecraft/server.properties $HOME/minecraft
        cp ./minecraft/minecraft.sh /usr/local/bin/minecraft

    elif [[ $METHOD == "start" ]]; then
        java -Xms1024M -Xmx3072M -jar $HOME/minecraft/minecraft_server_1.18.1.jar nogui

    fi
}

main $1