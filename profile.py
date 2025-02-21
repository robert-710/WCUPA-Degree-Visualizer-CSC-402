import geni.portal as portal
import geni.rspec.pg as rspec

# Create a Request object to start building the RSpec.
request = portal.context.makeRequestRSpec()

# Create a XenVM for the deployment
node = request.XenVM("graphical-degree-progress-node")
node.disk_image = "urn:publicid:IDN+emulab.net+image+emulab-ops:UBUNTU22-64-STD"
node.routable_control_ip = "true"

# Install system dependencies
node.addService(rspec.Execute(shell="/bin/sh", command="sudo apt update"))
node.addService(rspec.Execute(shell="/bin/sh", command="sudo apt install -y curl git"))

# Install Docker
node.addService(rspec.Execute(shell="/bin/sh", command="curl -fsSL https://get.docker.com -o get-docker.sh"))
node.addService(rspec.Execute(shell="/bin/sh", command="sudo sh get-docker.sh"))
node.addService(rspec.Execute(shell="/bin/sh", command="sudo systemctl start docker"))
node.addService(rspec.Execute(shell="/bin/sh", command="sudo systemctl enable docker"))

# Install Kubernetes (if needed)
node.addService(rspec.Execute(shell="/bin/sh", command="sudo apt install -y kubelet kubeadm kubectl"))

# Print the RSpec to the enclosing page.
portal.context.printRequestRSpec()
