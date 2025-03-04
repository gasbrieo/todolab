using MediatR;

namespace Todolab.Core.Mediators;

public interface IQuery<out TResponse> : IRequest<TResponse>;
