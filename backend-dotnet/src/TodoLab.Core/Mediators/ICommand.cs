using MediatR;

namespace TodoLab.Core.Mediators;

public interface ICommand<out TResponse> : IRequest<TResponse>;
