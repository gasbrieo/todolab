using MediatR;

namespace Todolab.Core.Mediators;

public interface ICommand<out TResponse> : IRequest<TResponse>;
