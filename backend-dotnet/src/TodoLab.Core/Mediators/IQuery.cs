using MediatR;

namespace TodoLab.Core.Mediators;

public interface IQuery<out TResponse> : IRequest<TResponse>;
