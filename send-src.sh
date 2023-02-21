#!/bin/bash
# SEND SOURCE.sh
#   by Lut99
#
# Simply script that aliases rsync to send the updated files to the remote server.
#

# Read the hostname
if [[ "$#" -ne "1" ]]; then
    echo "Usage: $0 <SSH hostname>" 2>&1
    exit 1
fi
hostname="$1"

# Now call rsync
rsync -avr --progress ./src/* "$hostname":/var/www/fs.timinc.nl/

