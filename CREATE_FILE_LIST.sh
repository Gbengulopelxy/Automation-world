#!/bin/bash
# Script to create a complete file listing

echo "# Complete File Tree for Copying" > FILE_TREE.txt
echo "" >> FILE_TREE.txt
echo "\`\`\`" >> FILE_TREE.txt
tree -I 'node_modules|.next|.git' -a --dirsfirst >> FILE_TREE.txt 2>/dev/null || find . -not -path "./node_modules/*" -not -path "./.next/*" -not -path "./.git/*" | sort | sed 's|^\./||' >> FILE_TREE.txt
echo "\`\`\`" >> FILE_TREE.txt

echo "File tree created: FILE_TREE.txt"
