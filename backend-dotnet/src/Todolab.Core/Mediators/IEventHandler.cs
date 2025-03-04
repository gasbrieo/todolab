using MediatR;

namespace Todolab.Core.Mediators;

public interface IEventHandler<in TEvent> : INotificationHandler<TEvent> where TEvent : DomainEventBase;
