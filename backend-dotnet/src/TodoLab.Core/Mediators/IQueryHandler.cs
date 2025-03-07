using MediatR;

namespace TodoLab.Core.Mediators;

public interface IQueryHandler<in TQuery, TResponse> : IRequestHandler<TQuery, TResponse> where TQuery : IQuery<TResponse>;
