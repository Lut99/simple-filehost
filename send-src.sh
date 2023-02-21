#!/bin/bash
# SEND SOURCE.sh
#   by Lut99
#
# Simply script that aliases rsync to send the updated files to the remote server.
#

# Read the hostname & remote directory (in one go)
if [[ "$#" -ne "1" ]]; then
    echo "Usage: $0 <SSH remote>" 2>&1
    exit 1
fi
remote="$1"

# Now call rsync
rsync -avr --progress ./src/* "$remote"

