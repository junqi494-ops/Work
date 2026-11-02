
const services = require('../data/mockServices');

function preparePayment(req, res) {
  const serviceId = Number(req.params.serviceId);

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return res.status(404).json({
      error: 'Service not found'
    });
  }

  res.status(200).json({
    serviceId: Number(service.id),
    serviceName: service.name,
    amount: Number(service.price),
    currency: 'sgd',
    status: 'READY_FOR_PAYMENT'
  });
}

module.exports = { preparePayment };
